import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { Space } from './space.entity';
import { SpaceRepository } from './space.repository';
import { managerSpaceDto } from './dto/get-managerSpace.dto';
import { User } from 'src/auth/user.entity';
import { CreateSpaceDto } from './dto/create-space.dto';
import { generateCode } from './utils/generatCode';
import { participantSpaceDto } from './dto/get-participantSpace.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { InvitationRepository } from './invitation.repository';
import { invitationDto } from './dto/get-invitation.dto';

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(SpaceRepository)
    private spaceRepository: SpaceRepository,
    private invitationRepository: InvitationRepository,
  ) {
    this.spaceRepository = spaceRepository;
    this.invitationRepository = invitationRepository;
  }

  async findManagerSpace(inviteCode: string, user: User) {
    const findSpace = await this.spaceRepository.findOne({ managerCode: inviteCode });

    if (findSpace) return managerSpaceDto(findSpace, user);
  }
  async findParticipantSpace(inviteCode: string, user: User) {
    const findSpace = await this.spaceRepository.findOne({ participantCode: inviteCode });

    if (findSpace) return participantSpaceDto(findSpace, user);
  }
  async addSpace(createSpaceDto: CreateSpaceDto, user: User) {
    let managerCode = generateCode(); // 무작위로 참여 코드 생성
    let space = await this.spaceRepository.checkInviteCode(managerCode);
    while (space.length) {
      managerCode = generateCode();
      space = await this.spaceRepository.checkInviteCode(managerCode);
    }
    let participantCode = generateCode(); // 무작위로 참여 코드 생성
    space = await this.spaceRepository.checkInviteCode(participantCode);
    while (space.length) {
      participantCode = generateCode();
      space = await this.spaceRepository.checkInviteCode(participantCode);
    }

    const newSpace = await this.spaceRepository.addSpace(createSpaceDto, user, managerCode, participantCode);
    return newSpace;
  }
  async deleteSpace(inviteCode: string, user: User) {
    const findSpace = await this.spaceRepository.findOne({ managerCode: inviteCode });
    if (!findSpace || findSpace.hostId !== user.id) {
      throw new HttpException('공간 개설자가 아닙니다', HttpStatus.FORBIDDEN);
    }
    findSpace.isDeleted = true;
    await this.spaceRepository.save(findSpace);

    return findSpace;
  }
  async addInvitation(createInvitationDto: CreateInvitationDto, user: User) {
    const newInvitation = await this.invitationRepository.addInvitation(createInvitationDto, user);

    return invitationDto(newInvitation);
  }
}
