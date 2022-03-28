import { User } from 'src/auth/user.entity';
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Space } from './space.entity';

@Entity()
export class Invitation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_id' })
  roleId: number;

  @Column({ name: 'created_at', default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.invitations, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Space, (space) => space.invitations, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'space_id' })
  space: Space;
}
