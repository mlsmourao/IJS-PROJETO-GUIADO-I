import { Test, TestingModule } from '@nestjs/testing';
import { PresencaService } from './presenca.service';
import { CreatePresencaCommand } from './commands/create-presenca-command';
import { ConflictException } from '@nestjs/common';
import { Presenca } from '../domain/presenca';
import { PresencaFactory } from '../domain/factories/presenca.factory';

describe('PresencaService', () => {
  let service: PresencaService;

  const presencaTest = {
    matriculaId: "1",
    dataAula: "23/08/2024",
    presente: true
  } as CreatePresencaCommand;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresencaService, PresencaFactory],
    }).compile();

    service = module.get<PresencaService>(PresencaService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar a presença criada para o controller', async () => {
    const presencaCriado = await service.cadastrar(presencaTest);
    expect(presencaCriado).toBeInstanceOf(Presenca);
    expect(presencaCriado.id).toBeDefined();
    expect(presencaCriado.matriculaId).toBe(presencaTest.matriculaId);
    expect(presencaCriado.dataAula).toBe(presencaTest.dataAula);
    expect(presencaCriado.presente).toBe(presencaTest.presente);
  });

  it('não deve cadastrar duas presenças para a mesma data, para o mesmo aluno', () => {
    service.cadastrar(presencaTest);
    expect(() => service.cadastrar(presencaTest)).toThrow(ConflictException);
  });
});