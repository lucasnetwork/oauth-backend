import { Controller, Get, Query } from '@nestjs/common';
import { OAuthservice } from './oAuth.service';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthservice) {}

  @Get()
  create(
    @Query()
    query: {
      state: string;
      clientId: string;
      response_type: string;
      redirect_uri: string;
    },
  ) {
    return this.oauthService.create(query);
  }
}
