import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //   @Get()
  //   getHello(): string {
  //     return this.appService.getHello();
  //   }
//   git config

  @Get()
  @Header('Content-Type', 'application/json')
  getNew(): { res: string } {
    return { res: 'response' };
  }
}
