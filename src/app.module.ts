import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AcessTokenModule } from './AcessToken/AcessToken.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterClient } from './database/entities/registerClient';
import { User } from './database/entities/user';
import { AuthorizationGranthModule } from './AuthorizationGrant/AuthorizationGrant.module';
import { RegisterClientModule } from './RegisterClient/registerClient.module';

@Module({
  imports: [
    RegisterClientModule,
    AuthorizationGranthModule,
    AcessTokenModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [RegisterClient, User],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveStaticOptions: {
        redirect: true,
        fallthrough: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
