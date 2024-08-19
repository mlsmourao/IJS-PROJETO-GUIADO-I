import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { Alunos } from './entities/alunos.entity';
import { AlunosRepository } from './alunos.repository';

@Injectable()
export class AlunosService {

  constructor(private readonly alunosRepository: AlunosRepository) {}

  async cadastrar(createAlunoDto: CreateAlunoDto) {
    const alunoExistente = await this.alunosRepository.buscarPorEmail(createAlunoDto.email);
    if (alunoExistente) {
      throw new BadRequestException('Já existe um aluno com este email.');
    }

    const aluno = new Alunos(
      createAlunoDto.nome, 
      createAlunoDto.endereco,
      createAlunoDto.telefone,
      createAlunoDto.email
    );

    await this.alunosRepository.salvar(aluno);
  }
}
