import { Matricula } from "src/matricula/domain/matricula";

export abstract class MatriculaRepository {
  abstract salvar(matricula: Matricula): Promise<Matricula>;
  abstract buscarPorAlunosDoCurso(alunosId: string, cursoId: string): Promise<Matricula>;
}
