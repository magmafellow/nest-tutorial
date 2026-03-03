import {
  Controller,
  Get,
  Header,
  HttpCode,
  Ip,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request, @Ip() ip: any): string {
    // console.log('request: ', request);
    console.log('Ip: ', ip);

    return 'This action returns all cats';
  }

  @Post()
  create(): string {
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
  redirectToMain() {

  }
}
