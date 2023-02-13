import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'

import { User } from './User'


@Entity()
export class Journal {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  note!: string

  @Column()
  createdDate!: Date

  @ManyToOne(() => User, (user) => user.journal)
  user!: User
}
