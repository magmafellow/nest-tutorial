import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CatsController } from './cats.controller';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [PostModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats/anroe', method: RequestMethod.ALL })
      .forRoutes(
        { path: 'cats', method: RequestMethod.ALL },
        { path: 'post', method: RequestMethod.POST },
        'cats/{*splat}',
      );
  }
}
