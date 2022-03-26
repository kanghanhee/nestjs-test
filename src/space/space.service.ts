import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Space } from './space.entity';
import { SpaceRepository } from './space.repository';
import { mySpaceDto } from './dto/get-space.dto';
import { User } from 'src/auth/user.entity';
import { CreateSpaceDto } from './dto/create-space.dto';
import { generateCode } from './utils/generatCode';

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(SpaceRepository)
    private spaceRepository: SpaceRepository,
  ) {
    this.spaceRepository = spaceRepository;
  }

  async findManagerSpace(inviteCode: string, user: User) {
    const findSpace = await this.spaceRepository.findOne({ managerCode: inviteCode });

    if (findSpace) return mySpaceDto(findSpace, user);
  }
  async findParticipantSpace(inviteCode: string, user: User) {
    const findSpace = await this.spaceRepository.findOne({ participantCode: inviteCode });

    if (findSpace) return mySpaceDto(findSpace, user);
  }
}
