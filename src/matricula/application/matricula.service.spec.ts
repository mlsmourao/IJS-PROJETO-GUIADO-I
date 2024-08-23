import { Test, TestingModule } from '@nestjs/testing';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaCommand } from './commands/create-matricula-command';
import { ConflictException } from '@nestjs/common';
import { Matricula } from '../domain/matricula';
import { MatriculaFactory } from '../domain/factories/matricula.factory';

describe('MatriculaService', () => {
  let service: MatriculaService;

  const matriculaTest = {
    alunoId: "1",
    cursoId: "1",
    dataMatricula: "23/08/2024",
    status: "ativo"
  } as CreateMatriculaCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatriculaService, MatriculaFactory],
    }).compile();

    service = module.get<MatriculaService>(MatriculaService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar uma matricula criada para o controller', async () => {
    const matriculaCriado = await service.cadastrar(matriculaTest);
    expect(matriculaCriado).toBeInstanceOf(Matricula);
    expect(matriculaCriado.id).toBeDefined();
    expect(matriculaCriado.alunoId).toBe(matriculaTest.alunoId);
    expect(matriculaCriado.cursoId).toBe(matriculaTest.cursoId);
    expect(matriculaCriado.dataMatricula).toBe(matriculaTest.dataMatricula);
    expect(matriculaCriado.status).toBe(matriculaTest.status);
  });

  it('não deve cadastrar duas matriculas com o mesmo aluno para o mesmo curso', () => {
    service.cadastrar(matriculaTest);
    expect(() => service.cadastrar(matriculaTest)).toThrow(ConflictException);
  });
});