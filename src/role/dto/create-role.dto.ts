import { IsNotEmpty } from 'class-validator';
import { Space } from 'src/space/space.entity';
import { Status } from '../status.enum';

export class CreateRoleDto {
  @IsNotEmpty()
  spaceId: Space;

  @IsNotEmpty()
  role: Status;

  @IsNotEmpty()
  roleName: string;
}
