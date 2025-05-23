import { Controller, Get } from '@nestjs/common';
import { AppService } from '../providers/AppService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }
}