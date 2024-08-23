import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateProfessorCommand } from './commands/create-professor-command';
import { ProfessorRepository } from './ports/professor.repository';
import { ProfessorFactory } from '../domain/factories/professor.factory';

@Injectable()
export class ProfessorService {
  constructor(
    private readonly professorRepository: ProfessorRepository,
    private readonly professorFactory: ProfessorFactory,
  ) {}

  cadastrar(createProfessorCommand: CreateProfessorCommand) {
    this.validarSeJaExiste(createProfessorCommand);

    const novoProfessor = this.professorFactory.criar(
      createProfessorCommand.nome,
      createProfessorCommand.endereco,
      createProfessorCommand.email,
      createProfessorCommand.telefone,
    );

    return this.professorRepository.salvar(novoProfessor);
  }

  private validarSeJaExiste(createProfessorCommand: CreateProfessorCommand) {
    const professorExistente = this.professorRepository.buscarPorEmail(
      createProfessorCommand.email,
    );
    if (professorExistente) {
      throw new ConflictException(
        'Já existe um professor cadastrado com esse email.',
      );
    }
  }

  listar() {
    return this.professorRepository.listar();
  }
}