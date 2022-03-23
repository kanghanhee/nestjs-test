import { Space } from 'src/space/space.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './space-role.enum';

@Entity()
export class SpaceRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: Role;

  @Column()
  roleName: string;

  @ManyToOne(() => Space, (space) => space.spaceRoles, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'space_id' })
  space: Space;
}
