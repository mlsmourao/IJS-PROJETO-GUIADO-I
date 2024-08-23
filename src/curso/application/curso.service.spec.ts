import { Test, TestingModule } from '@nestjs/testing';
import { CursoService } from './curso.service';
import { CreateCursoCommand } from './commands/create-curso-command';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Curso } from '../domain/curso';
import { CursoFactory } from '../domain/factories/curso.factory';

describe('CursoService', () => {
  let service: CursoService;

  const cursoTest = {
    nome: 'ON36-JS',
    descricao: 'Imersão JS e nuvem AWS ',
    cargaHoraria: 360,
    professorId: [],
    alunosId: []
  } as CreateCursoCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursoService, CursoFactory],
    }).compile();

    service = module.get<CursoService>(CursoService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um curso criado para o controller', async () => {
    const cursoCriado = await service.cadastrar(cursoTest);
    expect(cursoCriado).toBeInstanceOf(Curso);
    expect(cursoCriado.id).toBeDefined();
    expect(cursoCriado.nome).toBe(cursoTest.nome);
    expect(cursoCriado.descricao).toBe(cursoTest.descricao);
    expect(cursoCriado.cargaHoraria).toBe(cursoTest.cargaHoraria);
    expect(cursoCriado.professorId).toStrictEqual([]);
    expect(cursoCriado.alunosId).toStrictEqual([]);
  });

  it('não deve cadastrar dois cursos com o mesmo nome', () => {
    service.cadastrar(cursoTest);
    expect(() => service.cadastrar(cursoTest)).toThrow(ConflictException);
  });

});