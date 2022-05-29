import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  //  @Patch(':id')
  //  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //    return this.companieService.update(+id, updateProductDto);
  //  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
