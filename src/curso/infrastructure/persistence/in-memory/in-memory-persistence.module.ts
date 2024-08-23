import { Module } from '@nestjs/common';
import { CursoRepository } from '../../../application/ports/curso.repository';
import { InMemoryCursoRepository } from './repositories/curso.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: CursoRepository,
      useClass: InMemoryCursoRepository,
    },
  ],
  exports: [CursoRepository],
})
export class InMemoryCursoPersistenceModule {}