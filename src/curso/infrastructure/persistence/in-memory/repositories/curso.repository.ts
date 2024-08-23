import { Injectable } from '@nestjs/common';
import { CursoRepository } from '../../../../application/ports/curso.repository';
import { CursoEntity } from '../entities/curso.entity';
import { Curso } from '../../../../domain/curso';
import { CursoMapper } from '../mappers/curso.mapper';

@Injectable()
export class InMemoryCursoRepository implements CursoRepository {
  private readonly curso = new Map<string, CursoEntity>();

  async salvar(cursos: Curso): Promise<Curso> {
    const persistenceModel = CursoMapper.paraPersistencia(cursos);
    this.curso.set(persistenceModel.id, persistenceModel);
    const newEntity = this.curso.get(persistenceModel.id);
    return CursoMapper.paraDominio(newEntity);
  }

  async listar(): Promise<Curso[]> {
    const entities = Array.from(this.curso.values());
    return entities.map((item) => CursoMapper.paraDominio(item));
  }

  async buscarPorNome(nome: string): Promise<Curso> {
    const entities = Array.from(this.curso.values());
    const cursoEncontrado = entities.find((item) => item.nome === nome);
    if (!cursoEncontrado) {
      return null;
    }
    return CursoMapper.paraDominio(cursoEncontrado);
  }
}
