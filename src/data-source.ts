import { Journal } from "Entities/Journal"
import { Trades } from "Entities/Trades"
import { User } from './Entities/User'
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: false,
    entities: [User, Trades, Journal],
    migrations: [],
    subscribers: [],
})
