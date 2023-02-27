import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm"
import { Trades } from "./Trades"
import { Journal } from "./Journal"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    name: 'user_Name',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  userName!: string

  @Column({
    name: 'first_Name',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  firstName!: string

  @Column({
    name: 'last_Name',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  lastName!: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 150,
    unique: false,
  })
  email!: string

  @Column({
    name: 'symbol',
    type: 'timestamptz',
    unique: false,
  })
  createdDate!: Date

  @OneToMany(() => Trades, (trades) => trades.user)
  trades!: Trades[]

  @OneToMany(() => Journal, (journal) => journal.user)
  journal!: Trades[]
}