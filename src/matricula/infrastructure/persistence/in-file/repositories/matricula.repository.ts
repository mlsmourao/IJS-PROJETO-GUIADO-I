import { Injectable } from '@nestjs/common';
import { MatriculaRepository } from '../../../../application/ports/matricula.repository';
import { MatriculaEntity } from '../entities/matricula.entity';
import { Matricula } from '../../../../domain/matricula';

@Injectable()
export class InFileMatriculaRepository implements MatriculaRepository {
  salvar(matricula: Matricula): Promise<Matricula> {
    throw new Error('Method not implemented.');
  }
  buscarPorAlunosDoCurso(alunoId: string, cursoId: string): Promise<Matricula> {
    throw new Error('Method not implemented.');
  }
  private readonly matricula = new Map<string, MatriculaEntity>();
}