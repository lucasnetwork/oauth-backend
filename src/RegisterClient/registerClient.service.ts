import { Injectable } from '@nestjs/common';
import { randomBytes, createHash } from 'crypto';

@Injectable()
export class RegisterClientService {
  private HEX_CLIENT_ID_SIZE = 32;

  registerClient() {
    const clientId = randomBytes(this.HEX_CLIENT_ID_SIZE).toString('hex');
    const clientSecret = createHash('sha256').digest('hex');
    console.log(clientId);
    console.log(clientSecret);
    return 'registerClient';
  }
}
