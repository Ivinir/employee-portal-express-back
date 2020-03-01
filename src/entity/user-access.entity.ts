import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserAccessEntity {
  @PrimaryColumn()
  public id: string;
  @Column({ length: 100 })
  public email: string;
  @Column({ length: 20 })
  public password: string;
  @Column({ length: 30 })
  public role: string;

  constructor(user: any) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }
}