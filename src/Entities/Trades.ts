import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import {User } from "./User"

@Entity()
export class Trades {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  status!: string

  @Column()
  openDate!: Date

  @Column()
  closeDate!: number

  @Column()
  symbol!: string

  @Column()
  entry!: number

  @Column()
  exit!: number

  @Column()
  return!: number

  @Column()
  setup!: number

  @Column()
  createdDate!: Date

  @ManyToOne(() => User, (user) => user.trades)
  user!: User
}
