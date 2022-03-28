import { EntityRepository, Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';
import { Status } from './status.enum';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  async addRole(createRoleDto: CreateRoleDto) {
    const { spaceId, role, roleName } = createRoleDto;

    const newRole = this.create({
      space: spaceId,
      role,
      roleName,
    });

    await this.save(newRole);
    return newRole;
  }
}
