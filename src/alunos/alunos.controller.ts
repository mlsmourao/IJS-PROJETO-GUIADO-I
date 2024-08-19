import { Controller, Post, Body } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  cadastrar(@Body() createAlunoDto: CreateAlunoDto) {
    console.log(createAlunoDto instanceof CreateAlunoDto);
    console.log('controller :', createAlunoDto);
    return this.alunosService.cadastrar(createAlunoDto);
  }

}
