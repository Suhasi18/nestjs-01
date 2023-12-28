// src/app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Post('send-email')
  async sendEmail(@Body() data: { to: string; subject: string; text: string }): Promise<string> {
    await this.mailService.sendMail(data.to, data.subject, data.text);
    return this.appService.getHello();
  }
}
