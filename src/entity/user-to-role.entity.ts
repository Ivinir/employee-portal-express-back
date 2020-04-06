import { UserAccessEntity } from 'src/entity/user-access.entity';
import { UserRoleEntity } from './user-role.entity';
// tslint:disable: variable-name
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('user_to_role')
export class UserToRoleEntity {

  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(
    (type) => UserRoleEntity,
    (userRoleEntity) => userRoleEntity.user_role_id)
  @JoinColumn({ name: 'role_id' })
  public role_id!: number;

  @ManyToOne(
    (type) => UserAccessEntity,
    (userAccesEntity) => userAccesEntity.user_id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  public user_id!: string;

}