// tslint:disable: variable-name
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('user_role')
export class UserRoleEntity {

  @PrimaryGeneratedColumn({})
  public user_role_id!: number;

  @Column({})
  public user_role_name!: string;

}