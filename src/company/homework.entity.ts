import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('homeworks', { schema: 'company' })

export class HomeworkEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAT: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAT: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAT: Date;

    //Columns
    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'homeworks name'
    })
    name: string;

    @Column('varchar', {
        name: 'homework_status',
        nullable: false,
        comment: 'homeworks homework_status'
    })
    homework_status: string;


    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'homeworks description'
    })
    description: string;

    @Column('varchar', {
        name: 'assigned_employee',
        nullable: false,
        comment: 'homeworks assigned_employee'
    })
    assigned_employee: string;

    @BeforeInsert()
    @BeforeUpdate()
    async setName() {
        if (!this.name) {
            return;
        }
        this.name = this.name.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setHomework_status() {
        if (!this.homework_status) {
            return;
        }
        this.homework_status = this.homework_status.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDescription() {
        if (!this.description) {
            return;
        }
        this.description = this.description.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setAssigned_employee() {
        if (!this.assigned_employee) {
            return;
        }
        this.assigned_employee = this.assigned_employee.toUpperCase();
    }
}