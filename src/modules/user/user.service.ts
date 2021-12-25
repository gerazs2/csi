import { BadRequestException, Catch, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { USER } from 'src/common/models/models';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    
    async checkPassword(password: string, uniqueId: any):Promise<Boolean> {
        return await bcrypt.compare(password,uniqueId);
    }
  
    
    async findByUsername(username: string) {
       return await this.model.findOne({username});
    }

    async delete(id: string) {

        const todo = await this.model.findByIdAndDelete(id);
        
        if(!todo){
            throw new NotFoundException(`This ${id} is not found`)
        }
       
        return { status: HttpStatus.OK, msg: 'Delete' }
    }


    async update(id: string, UserDTO: UserDTO): Promise<IUser> {
        return await this.model.findByIdAndUpdate(id, { ...UserDTO }, { new: true });
    }

    
    async findOne(id: string): Promise<IUser> {
      
        const todo = await this.model.findOne({uniqueId:id})
        
        if(!todo){
            throw new NotFoundException(`This ${id} is not found`)
        }
        console.log(todo.uniqueId);
        return await todo;
    }

    ///////////////////////////////////////////////////////////////////
    async findAll(): Promise<IUser[]> {
        return await this.model.find();
    }

    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) { }
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
      }
    
      async create(userDTO: UserDTO): Promise<IUser> {
        const hash = await this.hashPassword(userDTO.password);
        const newUser = new this.model({ ...userDTO, password: hash });
        return await newUser.save();
      }
    
}
