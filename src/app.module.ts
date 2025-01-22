import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodosModule } from './todos/todos.module';
import { LoggerModule } from './logger/logger.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [DatabaseModule, TodosModule, LoggerModule, AppConfigModule],
})
export class AppModule { }
