import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InvitationRepository } from 'src/space/invitation.repository';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository, InvitationRepository]), AuthModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
