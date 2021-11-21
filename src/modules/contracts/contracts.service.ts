import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IContracts } from 'src/common/interfaces/contracts.interface';
import { CONTRACTS } from 'src/common/models/models';
import { ContractsDTO } from './dto/contracts.dto';

@Injectable()
export class ContractsService {


    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {status:HttpStatus.OK,msg:'Deleted Contract'}
    }

    async update(id: string, contractsDTO: ContractsDTO):Promise<IContracts> {
        return await this.model.findByIdAndUpdate(id,{...contractsDTO},{new:true})
    }

    async findOne(id: string):Promise<IContracts> {
        return await this.model.findById(id);
    }
    
    
    async findAll():Promise<IContracts[]> {
        return await this.model.find();
    }
    
    constructor (@InjectModel(CONTRACTS.name) private readonly model:Model<IContracts>){}
   
    async create(userDTO: ContractsDTO):Promise<IContracts> {
       const newUser = new this.model({...userDTO});
        
       return await newUser.save();
    }
}
