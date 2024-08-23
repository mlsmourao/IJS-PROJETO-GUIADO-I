import { Injectable } from '@nestjs/common';
import { PresencaRepository } from '../../../../application/ports/presenca.repository';
import { PresencaEntity } from '../entities/presenca.entity';
import { Presenca } from '../../../../domain/presenca';
import { PresencaMapper } from '../mappers/presenca.mapper';

@Injectable()
export class InMemoryPresencaRepository implements PresencaRepository {
  private readonly presenca = new Map<string, PresencaEntity>();
  private presencas: Presenca[] = [];

  async salvar(presenca: Presenca): Promise<Presenca> {
    const persistenceModel = PresencaMapper.paraPersistencia(presenca);
    this.presenca.set(persistenceModel.id, persistenceModel);
    const newEntity = this.presenca.get(persistenceModel.id);
    return PresencaMapper.paraDominio(newEntity);
  }

  async buscarPorPresenca(matriculaId: string, dataAula: string): Promise<Presenca> {
    const presenca = this.presencas.find(
      (presenca) => presenca.matriculaId === matriculaId && presenca.dataAula === dataAula
    );
    if (!presenca) {
      return Promise.reject(new Error('Presença não encontrada.'));
    }
    return Promise.resolve(presenca);
  }

}
