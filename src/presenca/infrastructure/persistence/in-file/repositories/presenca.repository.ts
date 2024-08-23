import { Injectable } from '@nestjs/common';
import { PresencaRepository } from '../../../../application/ports/presenca.repository';
import { PresencaEntity } from '../entities/presenca.entity';
import { Presenca } from '../../../../domain/presenca';

@Injectable()
export class InFilePresencaRepository implements PresencaRepository {
  salvar(presenca: Presenca): Promise<Presenca> {
    throw new Error('Method not implemented.');
  }
  buscarPorPresenca(matriculaId: string, dataAula: string): Promise<Presenca> {
    throw new Error('Method not implemented.');
  }
  private readonly presenca = new Map<string, PresencaEntity>();
}