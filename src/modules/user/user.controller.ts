import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('api/v1/user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiOperation({summary:'Crear usuario nuevo'})
    create(@Body() userDTO: UserDTO) {
        return this.userService.create(userDTO);
    }

    @Get()
    @ApiOperation({summary:'Mostrar Todos los usuarios'})
    findAll() {
        return this.userService.findAll();
    }
    //////////////////////////////////////////////////////
    @Get(':id')
    @ApiOperation({summary:'Obtener usuario por id, recibe body'})
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary:'Actualizar usuario por id'})
    update(@Param('id') id: string, @Body() UserDTO: UserDTO) {
        return this.userService.update(id, UserDTO);
    }

    @Delete(':id')
    @ApiOperation({summary:'Borrar usuario por id'})
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }

}
