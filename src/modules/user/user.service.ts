import { BadRequestException, Catch, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { USER } from 'src/common/models/models';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
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
       
        return await todo;
    }

    ///////////////////////////////////////////////////////////////////
    async findAll(): Promise<IUser[]> {
        return await this.model.find();
    }

    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) { }

    async create(userDTO: UserDTO): Promise<IUser> {
        const newUser = new this.model({ ...userDTO });
        return await newUser.save();
    }
}
