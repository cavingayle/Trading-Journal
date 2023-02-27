import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'

import { User } from './User'


@Entity()
export class Journal {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    name: 'note',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  note!: string

  @Column({
    name: 'symbol',
    type: 'timestamptz',
    unique: false,
  })
  createdDate!: Date

  @ManyToOne(() => User, (user) => user.journal)
  user!: User
}
