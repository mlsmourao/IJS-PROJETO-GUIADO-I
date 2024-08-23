import { Module } from '@nestjs/common';
import { PresencaRepository } from '../../../application/ports/presenca.repository';
import { InMemoryPresencaRepository } from './repositories/presenca.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: PresencaRepository,
      useClass: InMemoryPresencaRepository,
    },
  ],
  exports: [PresencaRepository],
})
export class InMemoryPresencaPersistenceModule {}