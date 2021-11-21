import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsString } from "class-validator";

export class UserDTO{
    @ApiProperty()
    @IsString()
    readonly nombre:string;
    @ApiProperty()
    @IsString()
    readonly apellido:string;
    @ApiProperty()
    @IsEmail()
    readonly email:string;
    @ApiProperty()
    @IsString()
    readonly password:string;
    @ApiProperty()
    @IsString()
    readonly fNacimiento:string;
    @ApiProperty()
    @IsString()
    readonly telefono:string;
    @ApiProperty()
    @IsString()
    readonly dirrecion:string;
    @ApiProperty()
    @IsString()
    readonly edoResidencia:string;
    @ApiProperty()
    @IsString()
    readonly habilidades:string;
    @ApiProperty()
    @IsString()
    readonly idContrato:string;
    @ApiProperty()
    @IsString()
    readonly oficina:string;
    @ApiProperty()
    @IsString()
    readonly rol:string;
}