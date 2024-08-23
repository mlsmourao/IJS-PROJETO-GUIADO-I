export class CursoEntity {
  id: string;
  nome: string;
  descricao: string;
  cargaHoraria: number;
  professorId: number[];
  alunosId: number[];
}