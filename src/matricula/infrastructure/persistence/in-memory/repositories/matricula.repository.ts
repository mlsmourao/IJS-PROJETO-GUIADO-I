import { Injectable } from '@nestjs/common';
import { MatriculaRepository } from '../../../../application/ports/matricula.repository';
import { MatriculaEntity } from '../entities/matricula.entity';
import { Matricula } from '../../../../domain/matricula';
import { MatriculaMapper } from '../mappers/matricula.mapper';

@Injectable()
export class InMemoryMatriculaRepository implements MatriculaRepository {
  private readonly matricula = new Map<string, MatriculaEntity>();
  private matriculas: Matricula[] = [];

  async salvar(matricula: Matricula): Promise<Matricula> {
    const persistenceModel = MatriculaMapper.paraPersistencia(matricula);
    this.matricula.set(persistenceModel.id, persistenceModel);
    const newEntity = this.matricula.get(persistenceModel.id);
    return MatriculaMapper.paraDominio(newEntity);
  }

  async buscarPorAlunosDoCurso(alunoId: string, cursoId: string): Promise<Matricula> {
    const matricula = this.matriculas.find(
      (matricula) => matricula.alunoId === alunoId && matricula.cursoId === cursoId
    );
    if (!matricula) {
      return Promise.reject(new Error('Matricula não encontrada.'));
    }
    return Promise.resolve(matricula);
  }

}
