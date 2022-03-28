import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { InvitationRepository } from 'src/space/invitation.repository';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
    private invitationRepository: InvitationRepository,
  ) {
    this.roleRepository = roleRepository;
    this.invitationRepository = invitationRepository;
  }

  async addRole(createRoleDto: CreateRoleDto, user: User) {
    const newSpaceRole = await this.roleRepository.addRole(createRoleDto);
  }
  async findRole(spaceId: number) {
    const findRole = await this.roleRepository.find({
      where: {
        space: spaceId,
      },
    });

    return findRole;
  }
  async deleteRole(roleId: number, user: User) {
    const deleteRole = await this.roleRepository.delete({ id: roleId });

    return deleteRole;
  }
}
