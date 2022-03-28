import { Matches, MinLength } from 'class-validator';

export class AuthCredentialDto {
  email: string;

  @MinLength(10, {
    message: '비밀번호는 최소 10자 이상입니다.',
  })
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어와 숫자만 가능합니다.',
  })
  password: string;
}
