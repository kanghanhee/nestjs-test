import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InvitationRepository } from './invitation.repository';
import { SpaceController } from './space.controller';
import { SpaceRepository } from './space.repository';
import { SpaceService } from './space.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceRepository, InvitationRepository]), AuthModule],
  controllers: [SpaceController],
  providers: [SpaceService],
})
export class SpaceModule {}
