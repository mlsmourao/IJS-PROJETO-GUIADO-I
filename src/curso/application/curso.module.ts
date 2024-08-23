import { Module, Type, DynamicModule } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from '../presenter/http/curso.controller';
import { CursoFactory } from '../domain/factories/curso.factory';

@Module({
  controllers: [CursoController],
  providers: [CursoService, CursoFactory],
})
export class CursoModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: CursoModule,
      imports: [infrastructureModule],
    };
  }
}
