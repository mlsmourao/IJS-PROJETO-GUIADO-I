import { Module, Type, DynamicModule } from '@nestjs/common';
import { MatriculaController } from '../presenter/http/matricula.controller';
import { MatriculaFactory } from '../domain/factories/matricula.factory';
import { MatriculaService } from './matricula.service';

@Module({
  controllers: [MatriculaController],
  providers: [MatriculaService, MatriculaFactory],
})
export class MatriculaModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: MatriculaModule,
      imports: [infrastructureModule],
    };
  }
}
