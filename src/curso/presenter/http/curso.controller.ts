import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { CursoService } from '../../application/curso.service';
import { CreateCursoCommand } from '../../application/commands/create-curso-command';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  cadastrar(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.cadastrar(
      new CreateCursoCommand(
        createCursoDto.nome,
        createCursoDto.descricao,
        createCursoDto.cargaHoraria
      ),
    );
  }

  @Get()
  listar() {
    return this.cursoService.listar();
  }
}