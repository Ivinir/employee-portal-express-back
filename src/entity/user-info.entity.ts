import { UserAccessEntity } from 'src/entity/user-access.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column } from 'typeorm';

@Entity('user_info')
export class UserInfoEntity {

  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(
    type => UserAccessEntity,
    (userAccessEntity) => userAccessEntity.user_id)
  @JoinColumn({
    name: 'user_id'
  })
  public user_id!: string;

  @Column({
    length: 100,
    default: null
  })
  public user_name!: string;

  @Column({
    length: 100,
    default: null
  })
  public user_surname1!: string;

  @Column({
    length: 100,
    default: null
  })
  public user_surname2!: string;

  @Column({
    length: 100,
    default: null
  })
  public user_address!: string;



}