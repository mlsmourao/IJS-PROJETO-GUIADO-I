import { Module } from '@nestjs/common';
import { InMemoryProfessorPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { InFileProfessorPersistenceModule } from './persistence/in-file/in-file-persistence.module';

@Module({})
export class ProfessorInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFileProfessorPersistenceModule
        : InMemoryProfessorPersistenceModule;

    return {
      module: ProfessorInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
