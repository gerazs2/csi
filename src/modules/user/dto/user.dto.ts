import { IsDate, IsEmail, IsString } from "class-validator";

export class UserDTO{
    @IsString()
    readonly nombre:string;
    @IsString()
    readonly apellido:string;
    @IsEmail()
    readonly email:string;
    @IsString()
    readonly password:string;
    @IsDate()
    readonly fNacimiento:Date;
    @IsString()
    readonly telefono:string;
    @IsString()
    readonly dirrecion:string;
    @IsString()
    readonly edoResidencia:string;
    @IsString()
    readonly habilidades:string;
    @IsString()
    readonly idContrato:string;
    @IsString()
    readonly oficina:string;
    @IsString()
    readonly rol:string;
}