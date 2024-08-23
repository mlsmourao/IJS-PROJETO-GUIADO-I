export class Matricula {
  constructor(
    public id: string,
    public alunoId: string,
    public cursoId: string,
    public dataMatricula: string,
    public status: string,
  ) {}
}