import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { OAuthservice } from './oAuth.service';
import { AuthorizationGrantRequest } from './validator';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthservice) {}

  @Post()
  async create(
    @Body()
    data: AuthorizationGrantRequest,
    @Res() res: Response,
  ) {
    try {
      const response = await this.oauthService.create(data);
      return res.send(
        `${data.redirect_uri}?code=${response}&state=${data.state}`,
      );
    } catch (e) {
      return res.status(400).json({ error: 'error' });
    }
  }
}
