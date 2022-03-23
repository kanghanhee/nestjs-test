import { Chat } from 'src/chat/chat.entity';
import { Space } from 'src/space/space.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ name: 'is_privated', default: false })
  isPrivated: boolean;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', default: () => 'now()' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()' })
  updatedAt: Date;

  @ManyToOne(() => Space, (space) => space.posts, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'space_id' })
  space: Space;

  @OneToMany(() => Chat, (chat) => chat.post, { cascade: true })
  chats: Chat[];
}
