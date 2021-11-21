import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { CONTRACTS } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractsSchema } from './schema/contracts.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:CONTRACTS.name,
      useFactory:() => {
        return ContractsSchema;
      }
    }])
  ],
  providers: [ContractsService],
  controllers: [ContractsController]
})
export class ContractsModule {}
