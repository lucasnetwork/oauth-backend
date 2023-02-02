import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterClient } from './database/entities/registerClient';
import { OAuthModule } from './OAuth/oAuth.module';
import { RegisterClientModule } from './RegisterClient/registerClient.module';

@Module({
  imports: [
    RegisterClientModule,
    OAuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [RegisterClient],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
