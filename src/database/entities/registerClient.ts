import { Column, Entity } from 'typeorm';

@Entity({
  name: 'register_client',
})
export class RegisterClient {
  @Column()
  clientId: string;
  @Column()
  clientSecret: string;
}
