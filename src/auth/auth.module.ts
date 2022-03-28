import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Jwt } from './jwt';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret1234',
      signOptions: {
        expiresIn: '30d',
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  // Jwt 를 이 Auth 머듈에서 사용할 수 있게 등록
  providers: [AuthService, Jwt],
  // Jwt 를 다른 모듈에서 사용할 수 있게 등록
  exports: [Jwt, PassportModule],
})
export class AuthModule {}
