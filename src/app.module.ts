import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SpaceModule } from './space/space.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, SpaceModule, PostModule],
})
export class AppModule {}
