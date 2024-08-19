import { Test, TestingModule } from '@nestjs/testing';
import { AlunosService } from './alunos.service';
import { AlunosRepository } from './alunos.repository';
import { BadRequestException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';

describe('Teste camada service para alunos', () => {
  let service: AlunosService;
  let repository: AlunosRepository;

  beforeEach(async () => {
    const mockAlunosRepository = {
      buscarPorEmail: jest.fn(),
      salvar: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlunosService,
        {
          provide: AlunosRepository,
          useValue: mockAlunosRepository,
        },
      ],
    }).compile();

    service = module.get<AlunosService>(AlunosService);
    repository = module.get<AlunosRepository>(AlunosRepository);
  });

  it('Testa o metodo buscarPorEmail', async () => {
    const createAlunoDto: CreateAlunoDto = {
      nome: 'Test Aluno',
      endereco: 'Rua Exemplo, 123',
      telefone: '123456789',
      email: 'test@example.com',
      anoNascimento: 2005,
    };

    jest.spyOn(repository, 'buscarPorEmail').mockReturnValueOnce({ ...createAlunoDto } as any);

    await expect(service.cadastrar(createAlunoDto)).rejects.toThrow(BadRequestException);
  });

  it('Testa o metodo cadastrar', async () => {
    const createAlunoDto: CreateAlunoDto = {
      nome: 'Test Aluno',
      endereco: 'Rua Exemplo, 123',
      telefone: '123456789',
      email: 'new@example.com',
      anoNascimento: 2005,
    };

    jest.spyOn(repository, 'buscarPorEmail').mockReturnValueOnce(undefined);

    await service.cadastrar(createAlunoDto);

    expect(repository.salvar).toHaveBeenCalledWith(expect.any(Object));
  });
});
