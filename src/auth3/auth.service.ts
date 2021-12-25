import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/modules/user/dto/user.dto';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService:UserService,
                private readonly JwtService:JwtService){

    }
     
    async singIn(user:any){
        const payload = {
            username: user.ClientName,
            sub: user._id,
          };

        return {access_token:this.JwtService.sign(payload)}
    }

    async singUp(userDto:UserDTO){
        return this.userService.create(userDto);

    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
    
        const isValidPassword = await this.userService.checkPassword(
          password,
          user.uniqueId,
        );
    
        if (user && isValidPassword) return user;
    
        return null;
      }
}
