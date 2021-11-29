import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEmployees } from 'src/common/interfaces/employees.interface';
import { EMPLOYEES } from 'src/common/models/models';
import { EmployeesDTO } from './dto/employees.dto';

@Injectable()
export class EmpleadosService {
    
    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Delete' }
    }


    async update(id: string, UserDTO: EmployeesDTO): Promise<IEmployees> {
        return await this.model.findByIdAndUpdate(id, { ...UserDTO }, { new: true });
    }
    
    async findOne(id: string): Promise<IEmployees> {
        return await this.model.findById(id);
    }
    
    async findAll(): Promise<IEmployees[]> {
        return await this.model.find();
    }

   

    async create(empleadosDTO: EmployeesDTO):Promise<IEmployees> {
        const newEmployeer = new this.model({ ...empleadosDTO });
        return await newEmployeer.save();
    }

    constructor(@InjectModel(EMPLOYEES.name) private readonly model:Model<IEmployees>){}
}
