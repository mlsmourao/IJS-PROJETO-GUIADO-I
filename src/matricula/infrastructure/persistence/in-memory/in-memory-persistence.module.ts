import { Module } from '@nestjs/common';
import { MatriculaRepository } from '../../../application/ports/matricula.repository';
import { InMemoryMatriculaRepository } from './repositories/matricula.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: MatriculaRepository,
      useClass: InMemoryMatriculaRepository,
    },
  ],
  exports: [MatriculaRepository],
})
export class InMemoryMatriculaPersistenceModule {}