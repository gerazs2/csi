import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { COMPANYS } from 'src/common/models/models';
import { CompanySchema } from './schema/company.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:COMPANYS.name,
      useFactory:() => {
        return CompanySchema;
      }
    }])
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
