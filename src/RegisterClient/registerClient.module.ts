import { Module } from '@nestjs/common';
import { RegisterClient } from './registerClient.controller';
import { RegisterClientService } from './registerClient.service';

@Module({
  imports: [],
  controllers: [RegisterClient],
  providers: [RegisterClientService],
})
export class RegisterClientModule {}
