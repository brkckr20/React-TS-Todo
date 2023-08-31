import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    todo_name : string
    
    @Column()
    status : string
    
}