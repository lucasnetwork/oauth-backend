import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterClient } from './database/entities/registerClient';
import { RegisterClientModule } from './RegisterClient/registerClient.module';

@Module({
  imports: [
    RegisterClientModule,
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
