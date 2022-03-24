import { Module } from '@nestjs/common';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceRoleModule } from './space-role/space-role.module';
import { ChatModule } from './chat/chat.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), SpaceModule, PostModule, SpaceRoleModule, ChatModule, AuthModule],
})
export class AppModule {}
