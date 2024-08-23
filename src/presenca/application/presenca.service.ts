import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreatePresencaCommand } from './commands/create-presenca-command';
import { PresencaRepository } from './ports/presenca.repository';
import { PresencaFactory } from '../domain/factories/presenca.factory';

@Injectable()
export class PresencaService {
  constructor(
    private readonly presencaRepository: PresencaRepository,
    private readonly presencaFactory: PresencaFactory,
  ) {}

  cadastrar(createPresencaCommand: CreatePresencaCommand) {
    this.validarSeJaExiste(createPresencaCommand);

    const novaPresenca = this.presencaFactory.criar(
      createPresencaCommand.matriculaId,
      createPresencaCommand.dataAula,
      createPresencaCommand.presente
    );

    return this.presencaRepository.salvar(novaPresenca);
  }
  
  private validarSeJaExiste(createPresencaCommand: CreatePresencaCommand) {
    const presencaExistente = this.presencaRepository.buscarPorPresenca(
      createPresencaCommand.matriculaId,
      createPresencaCommand.dataAula
    );
    if (presencaExistente) {
      throw new ConflictException(
        'Já existe uma presença registrada para essa data e neste curso, para este aluno.',
      );
    }
  }

}