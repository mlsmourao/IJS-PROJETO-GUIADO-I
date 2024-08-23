import { Injectable } from '@nestjs/common';
import { CursoRepository } from '../../../../application/ports/curso.repository';
import { CursoEntity } from '../entities/curso.entity';
import { Curso } from '../../../../domain/curso';

@Injectable()
export class InFileCursoRepository implements CursoRepository {
  salvar(curso: Curso): Promise<Curso> {
    throw new Error('Method not implemented.');
  }
  listar(): Promise<Curso[]> {
    throw new Error('Method not implemented.');
  }
  buscarPorNome(name: string): Promise<Curso> {
    throw new Error('Method not implemented.');
  }
  private readonly cursos = new Map<string, CursoEntity>();
}