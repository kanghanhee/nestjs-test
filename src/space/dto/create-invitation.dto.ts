import { Space } from '../space.entity';

export class CreateInvitationDto {
  spaceId: Space;
  roleId: number;
}
