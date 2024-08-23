import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorService } from './professor.service';
import { CreateProfessorCommand } from './commands/create-professor-command';
import { ConflictException, ForbiddenException } from '@nestjs/common';
import { Professor } from '../domain/professor';
import { ProfessorFactory } from '../domain/factories/professor.factory';

describe('ProfessorService', () => {
  let service: ProfessorService;

  const professorTest = {
    nome: 'João',
    endereco: 'Rua 1',
    email: 'example@example.com',
    anoNascimento: 2000,
  } as CreateProfessorCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessorService, ProfessorFactory],
    }).compile();

    service = module.get<ProfessorService>(ProfessorService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um professor criado para o controller', async () => {
    const professorCriado = await service.cadastrar(professorTest);
    expect(professorCriado).toBeInstanceOf(Professor);
    expect(professorCriado.id).toBeDefined();
    expect(professorCriado.nome).toBe(professorTest.nome);
    expect(professorCriado.endereco).toBe(professorTest.endereco);
    expect(professorCriado.email).toBe(professorTest.email);
    expect(professorCriado.telefone).toBe(professorTest.telefone);
    expect(professorCriado.cursos).toStrictEqual([]);
  });

  it('não deve persistir a data de nascimento', () => {
    const professorCriado = service.cadastrar(professorTest);
    expect(professorCriado).toBeInstanceOf(Professor);
    expect(professorCriado).not.toHaveProperty('anoNascimento');
  });

  it('não deve cadastrar dois professores com o mesmo email', () => {
    service.cadastrar(professorTest);
    expect(() => service.cadastrar(professorTest)).toThrow(ConflictException);
  });
});