import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class EmployeesDTO {
    @ApiProperty()
    @IsString()
    readonly nombre: string;
    @ApiProperty()
    @IsString()
    readonly apellido: string;
    @ApiProperty()
    @IsEmail()
    readonly email: string;
    @ApiProperty()
    @IsString()
    readonly password: string;
    @ApiProperty()
    @IsString()
    readonly fNacimiento: string;
    @ApiProperty()
    @IsString()
    readonly telefono: string;
    @ApiProperty()
    @IsString()
    readonly dirrecion: string;
    @ApiProperty()
    @IsString()
    readonly oficina: string;
    @ApiProperty()
    @IsString()
    readonly curp: string;

}