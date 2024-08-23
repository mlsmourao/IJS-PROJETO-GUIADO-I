import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/application/aluno.module';
import { CursoModule } from './curso/application/curso.module';
import { MatriculaModule } from './matricula/application/matricula.module';
import { ProfessorModule } from './professor/application/professor.module';

@Module({
  imports: [AlunoModule, CursoModule, MatriculaModule, ProfessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
