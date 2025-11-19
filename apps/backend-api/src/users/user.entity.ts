import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Couple } from '../couples/couple.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ nullable: true })
  couple_id: number;

  @ManyToOne(() => Couple, (couple) => couple.users, { nullable: true })
  @JoinColumn({ name: 'couple_id' })
  couple: Couple;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
