import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { EmployeesDTO } from './dto/employees.dto';
import { EmpleadosService } from './empleados.service';

@ApiTags('Empleados')
@Controller('api/v1/empleados')
export class EmpleadosController {

    constructor(private readonly empleadosService: EmpleadosService) {

    }

    @Post()
    @ApiOperation({ summary: 'Crear empleado nuevo' })
    create(@Body() empleadosDTO: EmployeesDTO) {
        return this.empleadosService.create(empleadosDTO);
    }

    @Get()
    @ApiOperation({summary:'Mostrar Todos los empleados'})
    findAll() {
        return this.empleadosService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary:'Obtener Empleado por id, recibe body'})
    findOne(@Param('id') id: string) {
        return this.empleadosService.findOne(id);
    }

    
    @Put(':id')
    @ApiOperation({summary:'Actualizar Empleado por id'})
    update(@Param('id') id: string, @Body() empleadosDTO: EmployeesDTO) {
        return this.empleadosService.update(id, empleadosDTO);
    }

    @Delete(':id')
    @ApiOperation({summary:'Borrar Empleado por id'})
    delete(@Param('id') id: string) {
        return this.empleadosService.delete(id);
    }


}
