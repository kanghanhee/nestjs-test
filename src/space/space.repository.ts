import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space } from './space.entity';

@EntityRepository(Space)
export class SpaceRepository extends Repository<Space> {
  async checkInviteCode(inviteCode: string) {
    return this.find({
      where: [{ managerCode: inviteCode }, { participantCode: inviteCode }],
    });
  }
  async addSpace(createSpaceDto: CreateSpaceDto, user: User, managerCode: string, participantCode: string) {
    const { spaceName, spaceLogo } = createSpaceDto;

    const newSpace = this.create({
      spaceName,
      spaceLogo,
      hostId: user.id,
      managerCode,
      participantCode,
    });

    await this.save(newSpace);
    return newSpace;
  }
}
