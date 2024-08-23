import { Module } from '@nestjs/common';
import { InMemoryAlunoPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { InFileAlunoPersistenceModule } from './persistence/in-file/in-file-persistence.module';

@Module({})
export class AlunoInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFileAlunoPersistenceModule
        : InMemoryAlunoPersistenceModule;

    return {
      module: AlunoInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
