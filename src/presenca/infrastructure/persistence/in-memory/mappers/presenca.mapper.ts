import { Presenca } from '../../../../domain/presenca';
import { PresencaEntity } from '../entities/presenca.entity';

export class PresencaMapper {
  static paraDominio(presencaEntity: PresencaEntity): Presenca {
    const model = new Presenca(
      presencaEntity.id,
      presencaEntity.matriculaId,
      presencaEntity.dataAula,
      presencaEntity.presente,
    );
    return model;
  }

  static paraPersistencia(presenca: Presenca) {
    const entity = new PresencaEntity();
    entity.id = presenca.id;
    entity.matriculaId = presenca.matriculaId;
    entity.dataAula = presenca.dataAula;
    entity.presente = presenca.presente;
    return entity;
  }
}
