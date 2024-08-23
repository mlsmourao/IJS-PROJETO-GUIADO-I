import { Curso } from '../../../../domain/curso';
import { CursoEntity } from '../entities/curso.entity';

export class CursoMapper {
  static paraDominio(cursoEntity: CursoEntity): Curso {
    const model = new Curso(
      cursoEntity.id,
      cursoEntity.nome,
      cursoEntity.descricao,
      cursoEntity.cargaHoraria,
      cursoEntity.professorId,
      cursoEntity.alunosId,
    );
    return model;
  }

  static paraPersistencia(curso: Curso) {
    const entity = new CursoEntity();
    entity.id = curso.id;
    entity.nome = curso.nome;
    entity.descricao = curso.descricao;
    entity.cargaHoraria = curso.cargaHoraria;
    entity.professorId = curso.professorId;
    entity.alunosId = curso.alunosId;
    return entity;
  }
}
