import { Module } from '@nestjs/common';
import { PresencaRepository } from '../../../application/ports/presenca.repository';
import { InFilePresencaRepository } from './repositories/presenca.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: PresencaRepository,
      useClass: InFilePresencaRepository, 
    },
  ],
  exports: [PresencaRepository],
})
export class InFilePresencaPersistenceModule {}