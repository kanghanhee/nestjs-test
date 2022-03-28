import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentailDto: AuthCredentialDto) {
    //res.status(HttpStatus.OK).json(authCredentailDto);
    return this.authService.signIn(authCredentailDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
}
