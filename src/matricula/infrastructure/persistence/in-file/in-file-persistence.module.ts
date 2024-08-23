import { Module } from '@nestjs/common';
import { MatriculaRepository } from '../../../application/ports/matricula.repository';
import { InFileMatriculaRepository } from './repositories/matricula.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: MatriculaRepository,
      useClass: InFileMatriculaRepository, 
    },
  ],
  exports: [MatriculaRepository],
})
export class InFileMatriculaPersistenceModule {}