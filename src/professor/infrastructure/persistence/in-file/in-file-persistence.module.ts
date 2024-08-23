import { Module } from '@nestjs/common';
import { ProfessorRepository } from '../../../application/ports/professor.repository';
import { InFileProfessorRepository } from './repositories/professor.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: ProfessorRepository,
      useClass: InFileProfessorRepository, 
    },
  ],
  exports: [ProfessorRepository],
})
export class InFileProfessorPersistenceModule {}