import { Module } from '@nestjs/common';
import { ProfessorRepository } from '../../../application/ports/professor.repository';
import { InMemoryProfessorRepository } from './repositories/professor.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: ProfessorRepository,
      useClass: InMemoryProfessorRepository,
    },
  ],
  exports: [ProfessorRepository],
})
export class InMemoryProfessorPersistenceModule {}