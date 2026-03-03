import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CatsController } from './cats.controller';

@Module({
  imports: [PostModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
