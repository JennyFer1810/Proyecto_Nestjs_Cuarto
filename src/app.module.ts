import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasController } from './ventas/ventas.controller';
import { VentasService } from './ventas/ventas.service';
import { CompanyModule } from './company/company.module';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';

@Module({
  imports: [
    VentasModule,
    CompanyModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'jennyfer18',
      database: 'company',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    CompanyModule
  ],
  controllers: [
    AppController,
    VentasController, 
    CompanyController],
  providers: [
    AppService, 
    VentasService, 
    CompanyService],
})
export class AppModule { }