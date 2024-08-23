import { Module, Type, DynamicModule } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from '../presenter/http/aluno.controller';
import { AlunoFactory } from '../domain/factories/aluno.factory';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService, AlunoFactory],
})
export class AlunoModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlunoModule,
      imports: [infrastructureModule],
    };
  }
}
