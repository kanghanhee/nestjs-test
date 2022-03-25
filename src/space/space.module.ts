import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceController } from './space.controller';
import { SpaceRepository } from './space.repository';
import { SpaceService } from './space.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceRepository])],
  controllers: [SpaceController],
  providers: [SpaceService],
})
export class SpaceModule {}
