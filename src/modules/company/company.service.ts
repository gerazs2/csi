import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICompany } from 'src/common/interfaces/company.interface';
import { COMPANYS } from 'src/common/models/models';
import { CompanyDTO } from './dto/company.dto';

@Injectable()
export class CompanyService {
   
   async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK,msg:'Company Deleted'}
    }
    
    
    async update(id: string, CompanyDTO: CompanyDTO):Promise<ICompany> {
        return await this.model.findByIdAndUpdate(id,{...CompanyDTO},{new:true});
    }
   
   async findOne(id: string):Promise<ICompany> {
       return await this.model.findById(id);
    }
    
    async findAll():Promise<ICompany[]> {
        return await this.model.find();
    }
  
    constructor (@InjectModel(COMPANYS.name) private readonly model:Model<ICompany>){}

    async create(CompanyDTO: CompanyDTO):Promise<ICompany> {
        const newCompany = new this.model({...CompanyDTO});

        return await newCompany.save();
        
       
    }
}
