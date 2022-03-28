import { Space } from 'src/space/space.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './status.enum';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  role: Status;

  @Column()
  roleName: string;

  @ManyToOne(() => Space, (space) => space.roles, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'space_id' })
  space: Space;
}
