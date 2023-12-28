// src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 587,
      auth: {
        user: '3a59c6a6051a9f',
        pass: '2337efdea0e9fc',
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    try {
      // Use Nodemailer to send the email
      await this.transporter.sendMail({
        from: 'suhasigs@gmail.com',
        to,
        subject,
        text,
      });

      console.log(`Email sent to ${to} with subject: ${subject}`);
    } catch (error) {
      console.error('Error sending email:', error.message);
      throw new Error('Failed to send email');
    }
  }
}
