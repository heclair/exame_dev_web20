import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({name:"names"})
export class Name {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false,length:20})
    firstname: string;

    @Column({nullable:false,length:20})
    lastname: string;
}