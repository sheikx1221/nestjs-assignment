import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text", nullable: false })
    firstname: string;

    @Column({ type: "text", nullable: false })
    lastname: string;

    @Column({ type: "text", nullable: false })
    email: string;

    @Column({ type: "text", nullable: false })
    username: string;

    @Column({ type: "text", nullable: false })
    password: string;

    @CreateDateColumn({ type: "time with time zone" })
    createdAt: Date;

    @UpdateDateColumn({ type: "time with time zone" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "time with time zone" })
    deletedAt: Date;
}
