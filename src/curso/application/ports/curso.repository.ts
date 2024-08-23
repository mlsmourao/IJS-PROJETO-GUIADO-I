import { Curso } from '../../domain/curso';

export abstract class CursoRepository {
  abstract salvar(curso: Curso): Promise<Curso>;
  abstract listar(): Promise<Curso[]>;
  abstract buscarPorNome(nome: string): Promise<Curso>;
}
