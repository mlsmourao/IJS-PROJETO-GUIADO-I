import { Injectable, Post, Body } from "@nestjs/common";
import { Alunos } from './entities/alunos.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class AlunosRepository {
    alunos: Alunos[]= [];

    salvar(aluno: Alunos) : void {
        aluno.id = uuid();
        this.alunos.push(aluno);
        console.log(`Salvando aluno ${aluno.nome}`);
    }
}