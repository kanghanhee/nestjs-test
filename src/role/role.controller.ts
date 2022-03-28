import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';
import { RoleService } from './role.service';
import { Status } from './status.enum';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  /**
   *  @ 역할 추가하기
   *  @route POST /role
   *  @error
   *
   */
  @Post('/')
  async addRole(@GetUser() user: User, @Body() createRoleDto: CreateRoleDto): Promise<Role> {
    if (!createRoleDto.role || !createRoleDto.roleName) throw new HttpException('필요한 값이 없습니다', HttpStatus.BAD_REQUEST);
    let addRole = await this.roleService.addRole(createRoleDto, user);

    return Object.assign({
      statusCode: 200,
      message: '역할 추가하기 성공',
      data: addRole,
    });
  }
  /**
   *  @ 역할 조회하기
   *  @route GET /role
   *  @error
   *
   */
  @Get('/:spaceId')
  async findRole(@GetUser() user: User, @Param('spaceId') spaceId: number): Promise<Role> {
    let findRole = await this.roleService.findRole(spaceId);

    return Object.assign({
      statusCode: 200,
      message: '역할 조회하기 성공',
      data: findRole,
    });
  }
  /**
   *  @ 역할 삭제하기
   *  @route POST /role/:roleId
   *  @error
   *
   */
  @Delete(':roleId')
  async deleteRole(@GetUser() user: User, @Param('roleId') roleId: number): Promise<Role> {
    let deleteRole = await this.roleService.deleteRole(roleId, user);

    return Object.assign({
      statusCode: 200,
      message: '역할 삭제하기 성공',
      data: deleteRole,
    });
  }
}
