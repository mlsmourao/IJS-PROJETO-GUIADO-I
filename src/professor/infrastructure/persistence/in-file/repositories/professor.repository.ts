import { Injectable } from '@nestjs/common';
import { ProfessorRepository } from '../../../../application/ports/professor.repository';
import { ProfessorEntity } from '../entities/professor.entity';
import { Professor } from '../../../../domain/professor';

@Injectable()
export class InFileProfessorRepository implements ProfessorRepository {
  salvar(professor: Professor): Promise<Professor> {
    throw new Error('Method not implemented.');
  }
  listar(): Promise<Professor[]> {
    throw new Error('Method not implemented.');
  }
  buscarPorEmail(email: string): Promise<Professor> {
    throw new Error('Method not implemented.');
  }
  private readonly professor = new Map<string, ProfessorEntity>();
}