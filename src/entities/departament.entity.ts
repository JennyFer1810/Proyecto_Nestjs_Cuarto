import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, ManyToMany } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity('departament', { schema: 'departamentos' })

export class DepartamentEntity {
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
        comment: 'departament name'
    })
    name: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'departament description'
    })
    description: string;

    @Column('varchar', {
        name: 'location',
        nullable: false,
        comment: 'departament location'
    })
    location: string;
    employees: any;

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
    async setDescrition() {
        if (!this.description) {
            return;
        }
        this.description = this.description.toLowerCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setLocation() {
        if (!this.location) {
            return;
        }
        this.location = this.location.toUpperCase();
    }

    //Relacion
    @ManyToMany(() => EmployeeEntity, employee => employee.departaments)
    employee: EmployeeEntity[];

}