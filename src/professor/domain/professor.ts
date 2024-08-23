export class Professor {
  constructor(
    public id: string,
    public nome: string,
    public endereco: string,
    public email: string,
    public telefone: string,
    public cursos: string[],
  ) {}
}