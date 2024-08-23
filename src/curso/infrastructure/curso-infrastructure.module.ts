import { Module } from '@nestjs/common';
import { InMemoryCursoPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { InFileCursoPersistenceModule } from './persistence/in-file/in-file-persistence.module';

@Module({})
export class CursoInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFileCursoPersistenceModule
        : InMemoryCursoPersistenceModule;

    return {
      module: CursoInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
