export class CreatePresencaCommand {
  constructor(
    public readonly matriculaId: string,
    public readonly dataAula: string,
    public readonly presente: boolean,
  ) {}
}