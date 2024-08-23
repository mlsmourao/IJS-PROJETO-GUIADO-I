import { Presenca } from "src/presenca/domain/presenca";

export abstract class PresencaRepository {
  abstract salvar(presenca: Presenca): Promise<Presenca>;
  abstract buscarPorPresenca(matriculaId: string, dataAula: string): Promise<Presenca | null>;
}

