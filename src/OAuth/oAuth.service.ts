import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterClient } from '../database/entities/registerClient';

@Injectable()
export class OAuthservice {
  private SECRET = 'secret';

  constructor(
    @InjectRepository(RegisterClient)
    private registerClientRepository: Repository<RegisterClient>,
    private jwtService: JwtService,
  ) {}
  async create(params: {
    state: string;
    clientId: string;
    response_type: string;
    redirect_uri: string;
  }) {
    const existClient = await this.registerClientRepository.findOne({
      where: {
        clientId: params.clientId,
      },
    });

    if (!existClient) {
      return new UnauthorizedException();
    }

    const token = this.jwtService.sign('client_id', {
      secret: this.SECRET,
    });
    console.log(token);
    return true;
  }
}
