import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadosModule } from './modules/empleados/empleados.module';

@Module({
  imports: [
     ConfigModule.forRoot({
       envFilePath:['.env.development'],
       isGlobal:true,
     }),
     
     MongooseModule.forRoot(process.env.URI_MONGODB),
    UserModule, CompanyModule, ContractsModule, EmpleadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
