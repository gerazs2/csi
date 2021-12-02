import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsString } from "class-validator";

export class UserDTO{
    @ApiProperty()
    @IsString()
    readonly ClientId:string;
    @ApiProperty()
    @IsString()
    readonly ClientName:string;
    @ApiProperty()
    @IsString()
    readonly ProcessDate:string;
    @ApiProperty()
    @IsString()
    readonly Consulate:string;
    @ApiProperty()
    @IsString()
    readonly FeePd:string;
    @ApiProperty()
    @IsString()
    readonly WorkerId:string;
    @ApiProperty()
    @IsString()
    readonly FirstName:string;
    @ApiProperty()
    @IsString()
    readonly LastName:string;
    @ApiProperty()
    @IsString()
    readonly LastName2:string;
    @ApiProperty()
    @IsString()
    readonly Gender:string;
    @ApiProperty()
    @IsString()
    readonly Address:string;
    @ApiProperty()
    @IsString()
    readonly City:string;
    @ApiProperty()
    @IsString()
    readonly State:string;
    @ApiProperty()
    @IsString()
    readonly Email:string;
    @ApiProperty()
    @IsString()
    readonly ZipCode:string;
    @ApiProperty()
    @IsString()
    readonly Phone:string;
    @ApiProperty()
    @IsString()
    readonly Phone2:string;
    @ApiProperty()
    @IsString()
    readonly Passport:string;
    @ApiProperty()
    @IsString()
    readonly PassportDate:string;
    @ApiProperty()
    @IsString()
    readonly PPStatus:string;
    @ApiProperty()
    @IsString()
    readonly New:string;
    @ApiProperty()
    @IsString()
    readonly CommentMX:string;
    @ApiProperty()
    @IsString()
    readonly RecrID:string;
    @ApiProperty()
    @IsString()
    readonly Petition:string;
    @ApiProperty()
    @IsString()
    readonly H2:string;
    @ApiProperty()
    @IsString()
    readonly Interview:string;
    @ApiProperty()
    @IsString()
    readonly DepositMade:string;
    @ApiProperty()
    @IsString()
    readonly DepositNumber:string;
    @ApiProperty()
    @IsString()
    readonly Packet:string;
    @ApiProperty()
    @IsString()
    readonly WorkerStatus:string;
    @ApiProperty()
    @IsString()
    readonly DOB:string;
    @ApiProperty()
    @IsString()
    readonly StatusIn:string;
    @ApiProperty()
    @IsString()
    readonly Renewal:string;
    @ApiProperty()
    @IsString()
    readonly IllegalPresence:string;
}