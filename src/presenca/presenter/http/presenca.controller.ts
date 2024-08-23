import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePresencaDto } from './dto/create-presenca.dto';
import { CreatePresencaCommand } from '../../application/commands/create-presenca-command';
import { PresencaService } from 'src/presenca/application/presenca.service';

@Controller('presenca')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Post()
  cadastrar(@Body() createPresencaDto: CreatePresencaDto) {
    return this.presencaService.cadastrar(
      new CreatePresencaCommand(
        createPresencaDto.matriculaId,
        createPresencaDto.dataAula,
        createPresencaDto.presente
      ),
    );
  }

}