import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1701283740062 implements MigrationInterface {
    name = 'Default1701283740062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "names" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstname" varchar(20) NOT NULL, "lastname" varchar(20) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "names"`);
    }

}
