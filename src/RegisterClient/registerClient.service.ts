import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterClientService {
  registerClient(body: any) {
    return 'registerClient';
  }
}
