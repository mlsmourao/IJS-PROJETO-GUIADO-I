import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Presenca } from '../presenca';

@Injectable()
export class PresencaFactory {
  criar(matriculaId: string, dataAula: string, presente: boolean) {
    const presencaId = uuid();
    return new Presenca(presencaId, matriculaId, dataAula, presente);
  }
}