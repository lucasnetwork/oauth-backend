import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class registerClient1675294227492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'register_client',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'client_id',
            type: 'varchar',
          },
          {
            name: 'client_secret',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('register_client');
  }
}
