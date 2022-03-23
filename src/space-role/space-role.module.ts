import { Module } from '@nestjs/common';
import { SpaceRoleController } from './space-role.controller';
import { SpaceRoleService } from './space-role.service';

@Module({
  controllers: [SpaceRoleController],
  providers: [SpaceRoleService]
})
export class SpaceRoleModule {}
