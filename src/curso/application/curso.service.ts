import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCursoCommand } from './commands/create-curso-command';
import { CursoRepository } from './ports/curso.repository';
import { CursoFactory } from '../domain/factories/curso.factory';

@Injectable()
export class CursoService {
  constructor(
    private readonly cursoRepository: CursoRepository,
    private readonly cursoFactory: CursoFactory,
  ) {}

  cadastrar(createCursoCommand: CreateCursoCommand) {
    this.validarSeJaExiste(createCursoCommand);

    const novoCurso = this.cursoFactory.criar(
      createCursoCommand.nome,
      createCursoCommand.descricao,
      createCursoCommand.cargaHoraria,
    );

    return this.cursoRepository.salvar(novoCurso);
  }

  private validarSeJaExiste(createCursoCommand: CreateCursoCommand) {
    const cursoExistente = this.cursoRepository.buscarPorNome(
      createCursoCommand.nome,
    );
    if (cursoExistente) {
      throw new ConflictException(
        'Já existe um curso cadastrado com esse nome.',
      );
    }
  }

  listar() {
    return this.cursoRepository.listar();
  }
}