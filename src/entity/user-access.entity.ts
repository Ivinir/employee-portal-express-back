// tslint:disable: variable-name
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_access')
export class UserAccessEntity {
  @PrimaryGeneratedColumn('uuid')
  public user_id!: string;
  @Column({
    length: 100,
    unique:true
  })
  public user_email!: string;
  @Column({
    length: 20
  })
  public user_password!: string;
  @Column({
    length: 30,
    default: 'employee'
  })
  public user_role!: string;
}