import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { User } from '../database/entities/user';
import { AcessTokenController } from './AcessToken.controller';
import { AcessTokenService } from './AcessToken.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterClient, User])],
  controllers: [AcessTokenController],
  providers: [AcessTokenService, JwtService],
})
export class AcessTokenModule {}
