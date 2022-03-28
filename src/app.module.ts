import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), SpaceModule, PostModule, RoleModule, ChatModule, AuthModule],
})
export class AppModule {}
