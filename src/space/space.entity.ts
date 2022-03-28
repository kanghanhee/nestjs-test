import { Post } from 'src/post/post.entity';
import { Role } from 'src/role/role.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invitation } from './invitation.entity';

@Entity()
export class Space extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'space_name' })
  spaceName: string;

  @Column({ name: 'space_logo' })
  spaceLogo: string;

  @Column({ name: 'host_id' })
  hostId: Number;

  @Column({ name: 'manager_code' })
  managerCode: string;

  @Column({ name: 'participant_code' })
  participantCode: string;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()' })
  updatedAt: Date;

  @OneToMany(() => Role, (role) => role.space, { eager: true, cascade: true })
  roles: Role[];

  @OneToMany(() => Post, (post) => post.space, { cascade: true })
  posts: Post[];

  @OneToMany(() => Invitation, (invitations) => invitations.space, { cascade: true })
  invitations: Invitation[];
}
