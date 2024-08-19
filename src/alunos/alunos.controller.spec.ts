import { Test, TestingModule } from '@nestjs/testing';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { validate } from 'class-validator';

describe('AlunosController', () => {
  let controller: AlunosController;
  let service: AlunosService;

  beforeEach(async () => {
    const mockAlunosService = {
      cadastrar: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlunosController],
      providers: [
        {
          provide: AlunosService,
          useValue: mockAlunosService,
        },
      ],
    }).compile();

    controller = module.get<AlunosController>(AlunosController);
    service = module.get<AlunosService>(AlunosService);
  });

  it('Testa a rota de criação de aluno', async () => {
    const dto = new CreateAlunoDto();
    dto.nome = 'Test Aluno';
    dto.endereco = 'Rua Exemplo, 123';
    dto.telefone = '123456789';
    dto.email = 'test@example.com';
    dto.anoNascimento = 2005;

    const errors = await validate(dto);
    expect(errors.length).toBe(0);

    await controller.cadastrar(dto);

    expect(service.cadastrar).toHaveBeenCalledWith(dto);
  });
});
