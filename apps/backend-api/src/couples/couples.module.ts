import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Couple } from './couple.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Couple])],
  exports: [TypeOrmModule],
})
export class CouplesModule {}
