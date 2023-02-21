import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Timestamp,
} from 'typeorm'
import { User } from './User'
import { Journal } from './Journal'

@Entity()
export class Trades {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    name: 'status',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  status!: string

  @Column({
    name: 'openDate',
    type: 'timestamptz',
    unique: false,
  })
  openDate!: Date

  @Column({
    name: 'closeDate',
    type: 'timestamptz',
    unique: false,
  })
  closeDate!: Date

  @Column({
    name: 'symbol',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  symbol!: string

  @Column({
    name: 'entry',
    type: 'float',
    length: 100,
    unique: false,
  })
  entry!: number

  @Column({
    name: 'entry',
    type: 'float',
    length: 100,
    unique: false,
  })
  exit!: number

  @Column({
    name: 'entry',
    type: 'float',
    length: 100,
    unique: false,
  })
  return!: number

  @Column({
    name: 'setup',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  setup!: string

  @Column({
    name: 'createdDate',
    type: 'timestamptz',
    unique: false,
  })
  createdDate!: Date

  @ManyToOne(() => User, (user) => user.trades)
  user!: User

  @OneToOne(() => Journal)
  @JoinColumn()
  journal!: Journal
}
