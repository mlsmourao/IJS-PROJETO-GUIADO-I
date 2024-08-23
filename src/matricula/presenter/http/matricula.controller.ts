import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { CreateMatriculaCommand } from '../../application/commands/create-matricula-command';
import { MatriculaService } from 'src/matricula/application/matricula.service';

@Controller('matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  cadastrar(@Body() createMatriculaDto: CreateMatriculaDto) {
    return this.matriculaService.cadastrar(
      new CreateMatriculaCommand(
        createMatriculaDto.alunoId,
        createMatriculaDto.cursoId,
        createMatriculaDto.dataMatricula,
        createMatriculaDto.status
      ),
    );
  }

}