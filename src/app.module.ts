import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
// import {Article} from './article.entity'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'steel_db',
      synchronize: true,
      entities: ['**/*.entity.ts','src/**/*.entity.ts'],
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration'
      },
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
