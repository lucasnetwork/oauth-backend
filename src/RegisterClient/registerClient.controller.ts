import { Controller, Post } from '@nestjs/common';
import { RegisterClientService } from './registerClient.service';

@Controller('register-client')
export class RegisterClientController {
  constructor(private readonly registerClientService: RegisterClientService) {}
  @Post()
  create() {
    return this.registerClientService.create();
  }
}
