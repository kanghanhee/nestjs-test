import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Space } from './space.entity';
import { SpaceRepository } from './space.repository';

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(SpaceRepository)
    private spaceRepository: SpaceRepository,
  ) {
    this.spaceRepository = spaceRepository;
  }

  findManagerSpace(inviteCode: string): Promise<Space> {
    return this.spaceRepository.findOne({ managerCode: inviteCode });
  }
  findParticipantSpace(inviteCode: string): Promise<Space> {
    return this.spaceRepository.findOne({ participantCode: inviteCode });
  }
}
