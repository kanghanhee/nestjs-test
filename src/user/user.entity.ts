import { Invitation } from 'src/space/invitation.entity';
import { Space } from 'src/space/space.entity';
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'profile_img' })
  profileImg: string;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()' })
  updatedAt: Date;

  @OneToMany(() => Invitation, (invitations) => invitations.user, { cascade: true })
  invitations: Invitation[];
}
