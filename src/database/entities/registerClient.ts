import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'register_client',
})
export class RegisterClient {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    name: 'client_id',
  })
  clientId: string;
  @Column({
    name: 'client_secret',
  })
  clientSecret: string;
}
