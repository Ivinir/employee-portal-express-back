import { accessControlServices } from 'src/services/';
import { AfterInsert } from 'typeorm';
// tslint:disable: variable-name
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('user_access')
export class UserAccessEntity {

  @PrimaryGeneratedColumn('uuid')
  public user_id!: string;

  @Column({
    length: 100,
    unique: true
  })
  public user_email!: string;

  @Column({
    length: 100
  })
  public user_password!: string;

}