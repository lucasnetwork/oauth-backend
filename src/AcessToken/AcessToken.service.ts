import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterClient } from '../database/entities/registerClient';
import { User } from '../database/entities/user';

@Injectable()
export class AcessTokenService {
  private SECRET = 'secret';
  private SECRET_TOKEN = 'secret_token';

  constructor(
    @InjectRepository(RegisterClient)
    private registerClientRepository: Repository<RegisterClient>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async create(params: {
    grant_type: string;
    code: string;
    redirect_uri: string;
    code_verifier: string; // option pkce
    client_id: string;
  }) {
    const isValid = this.jwtService.verify(params.code, {
      secret: this.SECRET,
    });
    if (!isValid) {
      throw new UnauthorizedException();
    }
    const existClient = await this.registerClientRepository.findOne({
      where: {
        clientId: params.client_id,
      },
    });

    if (!existClient) {
      throw new UnauthorizedException();
    }
    const token = this.jwtService.sign(
      { expire_in: '15 dias', token_type: 'Bearer' },
      {
        secret: this.SECRET_TOKEN,
      },
    );

    return token;
  }
}
