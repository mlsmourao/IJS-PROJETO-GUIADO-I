import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Curso } from '../curso';

@Injectable()
export class CursoFactory {
  criar(nome: string, descricao: string, cargaHoraria: number) {
    const cursoId = uuid();
    const professorId = [];
    const alunosId = [];
    return new Curso(cursoId, nome, descricao, cargaHoraria, professorId, alunosId);
  }
}