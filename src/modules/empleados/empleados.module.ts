import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EMPLOYEES } from 'src/common/models/models';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { EmployeesSchema } from './schema/employees.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: EMPLOYEES.name,
      useFactory: () => {
        return EmployeesSchema;
      }
    }])
  ],
  controllers: [EmpleadosController],
  providers: [EmpleadosService]
})
export class EmpleadosModule { }
