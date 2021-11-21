import { IsDate, IsEmail, IsString } from "class-validator";

export class CompanyDTO {
   
    @IsString()
    readonly nombre: string;
    @IsString()
    readonly giro: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly telefono: string;
    @IsString()
    readonly direccion: string;
    @IsString()
    readonly special: string;

}