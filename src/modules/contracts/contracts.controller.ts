import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContractsService } from './contracts.service';
import { ContractsDTO } from './dto/contracts.dto';

@ApiTags('contracts')
@Controller('api/v1/contracts')
export class ContractsController {

    constructor(private readonly contractsService:ContractsService){}

    @Post()
    create(@Body() contractsDTO:ContractsDTO){
        return this.contractsService.create(contractsDTO);
    }

    @Get()
    findAll(){
        return this.contractsService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contractsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() contractsDTO: ContractsDTO) {
        return this.contractsService.update(id, contractsDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.contractsService.delete(id);
    }

}
