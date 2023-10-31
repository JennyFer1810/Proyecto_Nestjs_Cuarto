import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories',{schema:'categorias'})

export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP',

    })
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP',

    })
    updateAT:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,

    })
    deleteAT:Date;

    @Column('varchar',{
        name:'name',
        nullable: false,
        comment:'category name'
    })
    name:string;

    @Column('varchar',{
        name:'description',
        nullable:false,
        comment:'category description'
    })
    description:string;
    
    @BeforeInsert()
    @BeforeUpdate()
    async setName(){
    if (!this.name){
        return;
    }
    this.name = this.name.toUpperCase();
}
    @BeforeInsert()
    @BeforeUpdate()
    async setDescrition(){
    if (!this.description){
        return;
    }
    this.description = this.description.toUpperCase();
}

//Relacion
@OneToMany(() => ProductEntity, product => product.category)
products: ProductEntity[];

}