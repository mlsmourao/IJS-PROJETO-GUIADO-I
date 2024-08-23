import { Injectable } from '@nestjs/common';
import { ProfessorRepository } from '../../../../application/ports/professor.repository';
import { ProfessorEntity } from '../entities/professor.entity';
import { Professor } from '../../../../domain/professor';
import { ProfessorMapper } from '../mappers/professor.mapper';

@Injectable()
export class InMemoryProfessorRepository implements ProfessorRepository {
  private readonly professor = new Map<string, ProfessorEntity>();

  async salvar(professor: Professor): Promise<Professor> {
    const persistenceModel = ProfessorMapper.paraPersistencia(professor);
    this.professor.set(persistenceModel.id, persistenceModel);
    const newEntity = this.professor.get(persistenceModel.id);
    return ProfessorMapper.paraDominio(newEntity);
  }

  async listar(): Promise<Professor[]> {
    const entities = Array.from(this.professor.values());
    return entities.map((item) => ProfessorMapper.paraDominio(item));
  }

  async buscarPorEmail(email: string): Promise<Professor> {
    const entities = Array.from(this.professor.values());
    const professorEncontrado = entities.find((item) => item.email === email);
    if (!professorEncontrado) {
      return null;
    }
    return ProfessorMapper.paraDominio(professorEncontrado);
  }
}
