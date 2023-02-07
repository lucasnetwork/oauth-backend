import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { User } from '../database/entities/user';
import { AuthorizationGrantRequest } from './validator';

@Injectable()
export class OAuthservice {
  private SECRET = 'secret';

  constructor(
    @InjectRepository(RegisterClient)
    private registerClientRepository: Repository<RegisterClient>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async create(params: AuthorizationGrantRequest) {
    console.log(params.clientId);
    const existClient = await this.registerClientRepository.findOne({
      where: {
        clientId: params.clientId || '',
      },
    });
    console.log(existClient);

    if (!existClient) {
      throw new UnauthorizedException();
    }
    const existUser = await this.userRepository.findOne({
      where: {
        email: params.email,
        password: params.password,
      },
    });

    if (!existUser) {
      throw new UnauthorizedException();
    }

    const token = this.jwtService.sign('client_id', {
      secret: this.SECRET,
    });

    return token;
  }
}
