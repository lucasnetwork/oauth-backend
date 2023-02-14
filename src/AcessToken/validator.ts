import { IsString, IsOptional } from 'class-validator';

export class AcessTokenRequest {
  @IsString()
  grant_type: string;
  @IsString()
  code: string;
  @IsString()
  @IsOptional()
  code_verifier: string;
  @IsString()
  client_id: string;
}
