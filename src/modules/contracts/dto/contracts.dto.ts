import { IsDate, IsEmail, IsString } from "class-validator";

export class ContractsDTO {
    @IsString()
    readonly nombre: string;
    @IsString()
    readonly idCompany: string;
    @IsString()
    readonly finicio: string;
    @IsString()
    readonly ffinal: string;
}