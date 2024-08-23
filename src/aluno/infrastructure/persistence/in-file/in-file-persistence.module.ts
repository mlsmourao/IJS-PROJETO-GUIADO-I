import { Module } from '@nestjs/common';
import { AlunoRepository } from '../../../application/ports/aluno.repository';
import { InFileAlunoRepository } from './repositories/aluno.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: AlunoRepository,
      useClass: InFileAlunoRepository, 
    },
  ],
  exports: [AlunoRepository],
})
export class InFileAlunoPersistenceModule {}