import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { CreateProfessorCommand } from '../../application/commands/create-professor-command';
import { ProfessorService } from 'src/professor/application/professor.service';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  cadastrar(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorService.cadastrar(
      new CreateProfessorCommand(
        createProfessorDto.nome,
        createProfessorDto.endereco,
        createProfessorDto.email,
        createProfessorDto.telefone,
        createProfessorDto.anoNascimento,
      ),
    );
  }

  @Get()
  listar() {
    return this.professorService.listar();
  }
}