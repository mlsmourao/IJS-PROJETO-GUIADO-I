import { Matricula } from '../../../../domain/matricula';
import { MatriculaEntity } from '../entities/matricula.entity';

export class MatriculaMapper {
  static paraDominio(matriculaEntity: MatriculaEntity): Matricula {
    const model = new Matricula(
      matriculaEntity.id,
      matriculaEntity.alunoId,
      matriculaEntity.cursoId,
      matriculaEntity.dataMatricula,
      matriculaEntity.status
    );
    return model;
  }

  static paraPersistencia(matricula: Matricula) {
    const entity = new MatriculaEntity();
    entity.id = matricula.id;
    entity.alunoId = matricula.alunoId;
    entity.cursoId = matricula.cursoId;
    entity.dataMatricula = matricula.dataMatricula;
    entity.status = matricula.status;
    return entity;
  }
}