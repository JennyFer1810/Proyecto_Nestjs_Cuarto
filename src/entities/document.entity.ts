import { Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('documents', { schema: 'documentos' })

export class DocumentsEntity {
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
        comment: 'documents name'
    })
    name: string;

    @Column('date', {
        name: 'creation_date',
        nullable: false,
        comment: 'documents creation date'
    })
    creation_date: string;

    @Column('varchar', {
        name: 'document_type',
        nullable: false,
        comment: 'documents document type'
    })
    document_type: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'documents description'
    })
    description: string;

    @Column('varchar', {
        name: 'document_status',
        nullable: false,
        comment: 'documents document status'
    })
    document_status: string;

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
    async setCreation_date() {
        if (!this.creation_date) {
            return;
        }
        this.creation_date = this.creation_date.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDocument_type() {
        if (!this.document_type) {
            return;
        }
        this.document_type = this.document_type.toUpperCase();
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
    async setDocument_status() {
        if (!this.document_status) {
            return;
        }
        this.document_status = this.document_status.toUpperCase();
    }
}