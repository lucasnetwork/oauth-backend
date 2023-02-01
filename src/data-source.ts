import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: [],
  migrations: ['./src/database/migrations/*.ts'],
});

export default PostgresDataSource;
