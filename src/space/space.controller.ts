import { Body, Controller, Get, Header, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateSpaceDto } from './dto/create-space.dto';
import { Space } from './space.entity';
import { SpaceService } from './space.service';

@Controller('space')
@UseGuards(AuthGuard())
export class SpaceController {
  constructor(private spaceService: SpaceService) {}

  /**
   *  @ 공간 참여하기
   *  @route GET /space/:inviteCode
   *  @error
   *
   */
  @Get(':inviteCode')
  async findOne(@GetUser() user: User, @Param('inviteCode') inviteCode: string): Promise<Space> {
    let findSpace = await this.spaceService.findManagerSpace(inviteCode, user);
    if (!findSpace) {
      findSpace = await this.spaceService.findParticipantSpace(inviteCode, user);
    }
    return Object.assign({
      statusCode: 200,
      message: '공간 참여하기 성공',
      data: findSpace,
    });
  }
}
