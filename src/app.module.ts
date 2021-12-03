import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CompanyModule } from './modules/company/company.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { ConfiguracionModule } from './config/config.module';
import { APP_FILTER } from '@nestjs/core';
import { Configuration } from './config/config.keys';

@Module({
  imports: [
     ConfigModule.forRoot({
       envFilePath:['.env.development'],
       isGlobal:true,
     }),
     
     MongooseModule.forRoot(process.env.URI_MONGODB),
    UserModule, CompanyModule, ContractsModule, EmpleadosModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string ;

  constructor(private readonly _configService:ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);
  }

}
