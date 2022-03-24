import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto) {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(authCredentailDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.signInUser(authCredentailDto);

    if (user) {
      // 유저 토큰 생성 ( Secret + Payload )
      const payload = { id: user.id, lastName: user.lastName, firstName: user.firstName };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    }
  }
}
