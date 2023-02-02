import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { RegisterClientController } from './registerClient.controller';
import { RegisterClientService } from './registerClient.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterClient])],
  controllers: [RegisterClientController],
  providers: [RegisterClientService],
})
export class RegisterClientModule {}
