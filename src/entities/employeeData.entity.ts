import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToOne } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity('employeeData', { schema: 'datos empleado' })

export class EmployeeDataEntity {
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
        name: 'fullname',
        nullable: false,
        comment: 'employeeData fullname'
    })
    fullname: string;

    @Column('date', {
        name: 'birth_date',
        nullable: false,
        comment: 'employeeData birth date'
    })
    birth_date: string;

    @Column('varchar', {
        name: 'civil_status',
        nullable: false,
        comment: 'employeeData civil status'
    })
    civil_status: string;

    @Column('varchar', {
        name: 'nationality',
        nullable: false,
        comment: 'employeeData nationality'
    })
    nationality: string;

    @Column('varchar', {
        name: 'gender',
        nullable: false,
        comment: 'employeeData gender'
    })
    gender: string;

    @BeforeInsert()
    @BeforeUpdate()
    async setFullName() {
        if (!this.fullname) {
            return;
        }
        this.fullname = this.fullname.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setBirth_date() {
        if (!this.birth_date) {
            return;
        }
        this.birth_date = this.birth_date.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setCivil_status() {
        if (!this.civil_status) {
            return;
        }
        this.civil_status = this.civil_status.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setNationality() {
        if (!this.nationality) {
            return;
        }
        this.nationality = this.nationality.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setGender() {
        if (!this.gender) {
            return;
        }
        this.gender = this.gender.toUpperCase();
    }

    //relacion empleado - datos identificación
    @OneToOne(() => EmployeeEntity, employee => employee.employeeData)
    employee: EmployeeEntity;

}