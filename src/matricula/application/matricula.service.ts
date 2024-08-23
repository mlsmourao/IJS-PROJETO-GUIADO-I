import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateMatriculaCommand } from './commands/create-matricula-command';
import { MatriculaRepository } from './ports/matricula.repository';
import { MatriculaFactory } from '../domain/factories/matricula.factory';

@Injectable()
export class MatriculaService {
  constructor(
    private readonly matriculaRepository: MatriculaRepository,
    private readonly matriculaFactory: MatriculaFactory,
  ) {}

  cadastrar(createMatriculaCommand: CreateMatriculaCommand) {
    this.validarSeJaExiste(createMatriculaCommand);

    const novaMatricula = this.matriculaFactory.criar(
      createMatriculaCommand.alunoId,
      createMatriculaCommand.cursoId,
      createMatriculaCommand.dataMatricula,
      createMatriculaCommand.status,
    );

    return this.matriculaRepository.salvar(novaMatricula);
  }

  private validarSeJaExiste(createMatriculaCommand: CreateMatriculaCommand) {
    const matriculaExistente = this.matriculaRepository.buscarPorAlunosDoCurso(
      createMatriculaCommand.alunoId,
      createMatriculaCommand.cursoId,
    );
    if (matriculaExistente) {
      throw new ConflictException(
        'Já existe uma matricula cadastrada neste curso para este aluno.',
      );
    }
  }

}