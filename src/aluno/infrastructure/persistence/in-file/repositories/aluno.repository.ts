import { Injectable } from '@nestjs/common';
import { AlunoRepository } from '../../../../application/ports/aluno.repository';
import { AlunoEntity } from '../entities/aluno.entity';
import { Aluno } from '../../../../domain/aluno';

@Injectable()
export class InFileAlunoRepository implements AlunoRepository {
  salvar(aluno: Aluno): Promise<Aluno> {
    throw new Error('Method not implemented.');
  }
  listar(): Promise<Aluno[]> {
    throw new Error('Method not implemented.');
  }
  buscarPorEmail(email: string): Promise<Aluno> {
    throw new Error('Method not implemented.');
  }
  private readonly alunos = new Map<string, AlunoEntity>();
}