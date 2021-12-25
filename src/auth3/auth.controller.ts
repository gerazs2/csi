import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/modules/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('api/v1/auth')
export class AuthController {

    constructor(private readonly AuthService:AuthService){}

   
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return await this.AuthService.singIn(req.ClientName);
  }

    @Post('singup')
    async singup(@Body() userDto:UserDTO){
        return await this.AuthService.singUp(userDto);
    }

}
