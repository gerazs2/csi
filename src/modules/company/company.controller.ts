import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CompanyDTO } from './dto/company.dto';

@ApiTags('company')
@Controller('/api/v1/company')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }

    @Post()
    create(@Body() CompanyDTO: CompanyDTO) {
        return this.companyService.create(CompanyDTO);
    }

    @Get()
    findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string ){
        return this.companyService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:string , @Body() CompanyDTO:CompanyDTO){
        return this.companyService.update(id,CompanyDTO);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.companyService.delete(id);
    }
    
}
