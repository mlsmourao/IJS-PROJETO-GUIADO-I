import { Module, Type, DynamicModule } from '@nestjs/common';
import { ProfessorController } from '../presenter/http/professor.controller';
import { ProfessorFactory } from '../domain/factories/professor.factory';
import { ProfessorService } from './professor.service';

@Module({
  controllers: [ProfessorController],
  providers: [ProfessorService, ProfessorFactory],
})
export class ProfessorModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: ProfessorModule,
      imports: [infrastructureModule],
    };
  }
}
