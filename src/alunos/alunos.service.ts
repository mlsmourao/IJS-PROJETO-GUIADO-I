import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Alunos } from './entities/alunos.entity';
import { AlunosRepository } from './alunos.repository';

@Injectable()
export class AlunosService {

  constructor(private readonly alunosRepository: AlunosRepository) {}

  cadastrar(createAlunoDto: CreateAlunoDto) {
    const aluno = new Alunos(
      createAlunoDto.nome, 
      createAlunoDto.endereco,
      createAlunoDto.telefone,
      createAlunoDto.email
    );

    // Verificar se temos outro aluno com o mesmo email
    // - Pega lista de alunos e verifica se tem algum com mesmo email
    // - Se tiver, lançar uma exception
    
    this.alunosRepository.salvar(aluno);
  }

}
