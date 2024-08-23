export class Curso {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public cargaHoraria: number,
    public professorId: number[],
    public alunosId: number[],
  ) {}
}