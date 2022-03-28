import { User } from 'src/auth/user.entity';
import { Status } from 'src/role/status.enum';
import { Space } from '../space.entity';

export const participantSpaceDto = (space: Space, user: User) => {
  return {
    spaceId: space.id,
    spaceName: space.spaceName,
    spaceLogo: space.spaceLogo,
    hostId: space.hostId,
    userId: user.id,
    userName: user.lastName + user.firstName,
    isHost: Number(space.hostId) === user.id,
    isManager: false,
    isDeleted: space.isDeleted,
    roles: space.roles.find((role) => role.role === Status.PARTICIPANT),
  };
};
