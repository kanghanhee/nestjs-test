import { Space } from '../space.entity';

export class CreateInvitationDto {
  spaceId: Space;
  isManager: boolean;
}
