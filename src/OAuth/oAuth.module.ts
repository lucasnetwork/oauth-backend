import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { OAuthController } from './oAuth.controller';
import { OAuthservice } from './oAuth.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterClient])],
  controllers: [OAuthController],
  providers: [OAuthservice, JwtService],
})
export class OAuthModule {}
