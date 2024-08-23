import { Professor } from "src/professor/domain/professor";

export abstract class ProfessorRepository {
  abstract salvar(professor: Professor): Promise<Professor>;
  abstract listar(): Promise<Professor[]>;
  abstract buscarPorEmail(email: string): Promise<Professor>;
}
