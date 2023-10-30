import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('ability', { schema: 'habilidades' })

export class AbilityEntity {
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

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'ability name'
    })
    name: string;

    @Column('varchar', {
        name: 'experience_level',
        nullable: false,
        comment: 'ability experience level'
    })
    experience_level: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'ability description'
    })
    description: string;

    @Column('varchar', {
        name: 'certifications',
        nullable: false,
        comment: 'ability certifications'
    })
    certifications: string;

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
    async setExperience_level() {
        if (!this.experience_level) {
            return;
        }
        this.experience_level = this.experience_level.toUpperCase();
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
    async setCertifications() {
        if (!this.certifications) {
            return;
        }
        this.certifications = this.certifications.toUpperCase();
    }
}