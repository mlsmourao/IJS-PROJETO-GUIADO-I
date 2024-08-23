import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Professor } from '../professor';

@Injectable()
export class ProfessorFactory {
  criar(nome: string, endereco: string, email: string, telefone: string) {
    const professorId = uuid();
    const professorCurso = [];
    return new Professor(professorId, nome, endereco, email, telefone, professorCurso);
  }
}