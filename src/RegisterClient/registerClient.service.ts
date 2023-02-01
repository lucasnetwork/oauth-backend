import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes, createHash } from 'crypto';
import { Repository } from 'typeorm';
import { RegisterClient } from '../database/entities/registerClient';

@Injectable()
export class RegisterClientService {
  constructor(
    @InjectRepository(RegisterClient)
    private registerClientRepository: Repository<RegisterClient>,
  ) {}
  private HEX_CLIENT_ID_SIZE = 32;

  async registerClient() {
    const clientId = randomBytes(this.HEX_CLIENT_ID_SIZE).toString('hex');
    const clientSecret = createHash('sha256').digest('hex');

    const response = await this.registerClientRepository.save({
      clientId,
      clientSecret,
    });
    return response;
  }
}
