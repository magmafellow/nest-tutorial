import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(
    @Req() request: Request,
    @Ip() ip: any,
    @Query('breed') breed: string,
    @Query('age') age: number,
  ): string {
    // console.log('request: ', request);
    // console.log('Ip: ', ip);
    console.log('breed from query parameters: ', breed);
    console.log('age from query parameters: ', age);

    return 'This action returns all cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  @Get('some{*param}')
  handleRest(): { value: string } {
    return { value: 'Handled by rest' };
  }

  // using expressjs res -- Switch to manual response handling mode
  @Get('breed')
  @Header('type-animal', 'cat')
  getBreed(@Res() res: Response): any {
    return res.status(200).json({
      name: 'Breed',
    });
  }

  @Get('redirect-to-main')
  @Redirect('/')
  redirectToMain() {}

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }
}
