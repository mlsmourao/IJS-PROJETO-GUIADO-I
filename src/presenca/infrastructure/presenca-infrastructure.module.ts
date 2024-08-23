import { Module } from '@nestjs/common';
import { InMemoryPresencaPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { InFilePresencaPersistenceModule } from './persistence/in-file/in-file-persistence.module';

@Module({})
export class PresencaInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFilePresencaPersistenceModule
        : InMemoryPresencaPersistenceModule;

    return {
      module: PresencaInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
