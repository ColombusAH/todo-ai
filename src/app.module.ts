import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './logger/logger.module';
import { AppConfigModule } from './app-config/app-config.module';
import * as Joi from 'joi';

@Module({
  imports: [DatabaseModule, TodosModule, LoggerModule, AppConfigModule],
})
export class AppModule { }
