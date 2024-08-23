import { Professor } from '../../../../domain/professor';
import { ProfessorEntity } from '../entities/professor.entity';

export class ProfessorMapper {
  static paraDominio(professorEntity: ProfessorEntity): Professor {
    const model = new Professor(
      professorEntity.id,
      professorEntity.nome,
      professorEntity.endereco,
      professorEntity.email,
      professorEntity.telefone,
      professorEntity.cursos,
    );
    return model;
  }

  static paraPersistencia(professor: Professor) {
    const entity = new ProfessorEntity();
    entity.id = professor.id;
    entity.nome = professor.nome;
    entity.endereco = professor.endereco;
    entity.email = professor.email;
    entity.telefone = professor.telefone;
    entity.cursos = professor.cursos;
    return entity;
  }
}
