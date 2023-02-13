import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm"
import { Trades } from "./Trades"
import { Journal } from "./Journal"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  userName!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  email!: string

  @Column()
  createdDate!: Date

  @OneToMany(() => Trades, (trades) => trades.user)
  trades!: Trades[]
    
  @OneToMany(() => Journal, (journal) => journal.user)
  journal!: Trades[]
}