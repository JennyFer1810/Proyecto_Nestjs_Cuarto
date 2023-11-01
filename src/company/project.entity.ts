import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('projects', { schema: 'company' })

export class ProjectsEntity {
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
        comment: 'projects name'
    })
    name: string;

    @Column('date', {
        name: 'start_date',
        nullable: false,
        comment: 'projects start date'
    })
    start_date: string;

    @Column('date', {
        name: 'final_date',
        nullable: false,
        comment: 'projects final date'
    })
    final_date: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'projects description'
    })
    description: string;

    @Column('varchar', {
        name: 'assigned_employee',
        nullable: false,
        comment: 'projects assigned_employee'
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
    async setStart_date() {
        if (!this.start_date) {
            return;
        }
        this.start_date = this.start_date.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setFinal_date() {
        if (!this.final_date) {
            return;
        }
        this.final_date = this.final_date.toUpperCase();
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