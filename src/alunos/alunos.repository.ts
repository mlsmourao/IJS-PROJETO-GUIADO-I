import { Injectable } from "@nestjs/common";
import { Alunos } from './entities/alunos.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class AlunosRepository {
    private alunos: Alunos[] = [];

    salvar(aluno: Alunos): void {
        aluno.id = uuid();
        this.alunos.push(aluno);
        console.log(`Salvando aluno ${aluno.nome}`);
    }

    buscarPorEmail(email: string): Alunos | undefined {
        return this.alunos.find(aluno => aluno.email === email);
    }
}
