import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Matricula } from '../matricula';

@Injectable()
export class MatriculaFactory {
  criar(alunoId: string, cursoId: string, dataMatricula: string, status: string) {
    const matriculaId = uuid();
    return new Matricula(matriculaId, alunoId, cursoId, dataMatricula, status);
  }
}