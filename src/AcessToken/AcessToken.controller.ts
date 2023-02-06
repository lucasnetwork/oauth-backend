import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AcessTokenService } from './AcessToken.service';
import { AcessTokenRequest } from './validator';

@Controller('acess-token')
export class AcessTokenController {
  constructor(private readonly acessTokenService: AcessTokenService) {}

  @Post()
  async create(
    @Body()
    data: AcessTokenRequest,
    @Res() res: Response,
  ) {
    try {
      const response = await this.acessTokenService.create(data);
      return res.status(200).json({ token: response });
    } catch (e) {
      return res.status(400).json({ error: 'error' });
    }
  }
}
