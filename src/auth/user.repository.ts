import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto) {
    const { email, password } = authCredentialDto;

    // 비밀번호 암호화하기
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, password: hashedPassword });

    await this.save(user);
  }

  async signInUser(authCredentailDto: AuthCredentialDto) {
    const { email, password } = authCredentailDto;
    const user = await this.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
