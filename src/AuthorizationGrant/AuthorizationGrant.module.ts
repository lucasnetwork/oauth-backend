import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { User } from '../database/entities/user';
import { AuthorizationGrantController } from './AuthorizationGrant.controller';
import { AuthorizationGrantservice } from './AuthorizationGrant.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterClient, User])],
  controllers: [AuthorizationGrantController],
  providers: [AuthorizationGrantservice, JwtService],
})
export class AuthorizationGranthModule {}
