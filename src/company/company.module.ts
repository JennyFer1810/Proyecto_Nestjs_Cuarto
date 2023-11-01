import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityEntity } from './ability.entity';
import { DepartamentEntity } from './departament.entity';
import { EmployeeDataEntity } from './employeeData.entity';
import { EmployeeEntity } from './employee.entity';
import { HomeworkEntity } from './homework.entity';
import { ProjectsEntity } from './project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbilityEntity, DepartamentEntity, EmployeeDataEntity, EmployeeEntity,HomeworkEntity, ProjectsEntity ])
  ],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
