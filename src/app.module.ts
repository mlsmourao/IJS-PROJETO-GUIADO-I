import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './aluno/core/core.module';
import { ApplicationBootstrapOptions } from './aluno/common/interfaces/application-bootstrap-options.interface';
import { AlunoModule } from './aluno/application/aluno.module';
import { AlunoInfrastructureModule } from './aluno/infrastructure/aluno-infrastructure.module';
import { ProfessorModule } from './professor/application/professor.module';
import { ProfessorInfrastructureModule } from './professor/infrastructure/aluno-infrastructure.module';
import { CursoInfrastructureModule } from './curso/infrastructure/curso-infrastructure.module';
import { CursoModule } from './curso/application/curso.module';
import { MatriculaModule } from './matricula/application/matricula.module';
import { MatriculaInfrastructureModule } from './matricula/infrastructure/matricula-infrastructure.module';
import { PresencaModule } from './presenca/application/presenca.module';
import { PresencaInfrastructureModule } from './presenca/infrastructure/presenca-infrastructure.module';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlunoModule.comInfraestrutura(
          AlunoInfrastructureModule.use(options.driver),
        ),
        ProfessorModule.comInfraestrutura(
          ProfessorInfrastructureModule.use(options.driver),
        ),
        CursoModule.comInfraestrutura(
          CursoInfrastructureModule.use(options.driver),
        ),
        MatriculaModule.comInfraestrutura(
          MatriculaInfrastructureModule.use(options.driver),
        ),
        PresencaModule.comInfraestrutura(
          PresencaInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}