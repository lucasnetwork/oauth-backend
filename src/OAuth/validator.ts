import { IsString, IsEmail } from 'class-validator';

export class AuthorizationGrantRequest {
  @IsString()
  state: string;
  @IsString()
  clientId: string;
  @IsString()
  response_type: string;
  @IsString()
  redirect_uri: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
