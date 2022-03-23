import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceRoleModule } from './space-role/space-role.module';
import { ChatModule } from './chat/chat.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, SpaceModule, PostModule, SpaceRoleModule, ChatModule],
})
export class AppModule {}
