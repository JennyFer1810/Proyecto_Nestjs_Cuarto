import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { DepartamentEntity } from "./departament.entity";
import { AbilityEntity } from "./ability.entity";
import { EmployeeDataEntity } from "./employeeData.entity";

@Entity('employee', { schema: 'empleados' })

export class EmployeeEntity {
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
        comment: 'employee name'
    })
    name: string;

    @Column('varchar', {
        name: 'address',
        nullable: false,
        comment: 'employee address'
    })
    address: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'employee email'
    })
    email: string;

    @Column('integer', {
        name: 'phone',
        nullable: false,
        comment: 'employee phone'
    })
    phone: number;
    departaments: any;

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
    async setAddress() {
        if (!this.address) {
            return;
        }
        this.address = this.address.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setEmail() {
        if (!this.email) {
            return;
        }
        this.email = this.email.toUpperCase();
    }

   /* @BeforeInsert()
    @BeforeUpdate()
    async setPhone() {
        if (!this.phone) {
            return;
        }
        this.phone = this.phone.toUpperCase();
    }*/

    //Relacion
    @ManyToMany(() => DepartamentEntity, departament => departament.employees)
    @JoinTable()
    departament: DepartamentEntity[];

    //relacion empleado - habilidad
    @OneToMany(() => AbilityEntity, ability => ability.employee)
    abilitys: AbilityEntity[];

    //relacion empleado - datos identificación
    @OneToOne(() => EmployeeDataEntity, employeeData => employeeData.employee)
    @JoinColumn()
    employeeData: EmployeeDataEntity;

    //onetomany se agrega el array y en esa misma fila va la palabra en plural
    //manytomany todo en plural y en los dos va array, y se agrega en joinTable en la tabla fuerte
    //onetoone todo singular y en la tabla fuerte se agrega el joinColumn

}