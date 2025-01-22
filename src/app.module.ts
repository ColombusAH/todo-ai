import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [DatabaseModule, LoggerModule.forRoot({
    pinoHttp: {
      transport:
        process.env.NODE_ENV !== 'production'
          ? {
              target: 'pino-pretty', // Use pretty print in development
              options: {
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
