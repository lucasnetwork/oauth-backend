import { Body, Controller, Post } from '@nestjs/common';
import { RegisterClientService } from './registerClient.service';

@Controller('register-client')
export class RegisterClient {
  constructor(private readonly registerClientService: RegisterClientService) {}
  @Post()
  registerClient(@Body() body) {
    return this.registerClientService.registerClient(body);
  }
}
