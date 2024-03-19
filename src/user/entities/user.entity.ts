/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // "DBMS" 를 위한 type
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}

// select false
// repo.find -> 결과 값으로 가져오지 않음
// create table ...
