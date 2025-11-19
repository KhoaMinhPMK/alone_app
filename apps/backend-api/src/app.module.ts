import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CouplesModule } from './couples/couples.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'alone_db',
      entities: [],
      autoLoadEntities: true,
      synchronize: true, // Chỉ bật true ở môi trường Dev để tự tạo bảng
    }),
    UsersModule,
    CouplesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
