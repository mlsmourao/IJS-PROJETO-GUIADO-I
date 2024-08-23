import { Module } from '@nestjs/common';
import { InMemoryMatriculaPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';
import { InFileMatriculaPersistenceModule } from './persistence/in-file/in-file-persistence.module';

@Module({})
export class MatriculaInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFileMatriculaPersistenceModule
        : InMemoryMatriculaPersistenceModule;

    return {
      module: MatriculaInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
