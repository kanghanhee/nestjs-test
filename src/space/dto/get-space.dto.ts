import { User } from 'src/auth/user.entity';
import { Space } from '../space.entity';

export const mySpaceDto = (space: Space, user: User) => {
  return {
    spaceId: space.id,
    spaceName: space.spaceName,
    spaceLogo: space.spaceLogo,
    hostId: space.hostId,
    userId: user.id,
    userName: user.lastName + user.firstName,
    isHost: Number(space.hostId) === user.id,
    isDeleted: space.isDeleted,
    //reviewCreatedDate: myReview.createdAt,
    //isLikedReview: !!likedReviewList.includes(myReview.id),
    //likeReviewCount: reviewUtils.getCount(myReview.id, likeCountList),
  };
};
