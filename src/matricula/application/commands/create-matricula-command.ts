export class CreateMatriculaCommand {
  constructor(
    public readonly alunoId: string,
    public readonly cursoId: string,
    public readonly dataMatricula: string,
    public readonly status: string
  ) {}
}