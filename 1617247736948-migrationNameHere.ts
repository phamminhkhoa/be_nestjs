import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere1617247736948 implements MigrationInterface {
    name = 'migrationNameHere1617247736948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "content" text NOT NULL, "author" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
