import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TaskStatus {
    NEW = "new",
    DOING = "doing",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", { nullable: false })
    title: string;

    @Column("text")
    description: string;

    @Column("enum", { enum: TaskStatus, default: TaskStatus.NEW })
    status: TaskStatus;

    @Column("timestamp with time zone")
    dueDate: Date;

    @ManyToOne(() => User, { nullable: false })
    user: string | User;

    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;

    @DeleteDateColumn({ type: "timestamp with time zone" })
    deletedAt: Date;
}
