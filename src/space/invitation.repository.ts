import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Invitation } from './invitation.entity';
import { Space } from './space.entity';

@EntityRepository(Invitation)
export class InvitationRepository extends Repository<Invitation> {
  async addInvitation(createInvitationDto: CreateInvitationDto, user: User) {
    const { spaceId, isManager } = createInvitationDto;

    const newInvitation = this.create({
      space: spaceId,
      isManager: isManager,
      user: user,
    });

    await this.save(newInvitation);
    return newInvitation;
  }
}
