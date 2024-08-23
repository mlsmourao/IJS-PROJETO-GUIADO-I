import {
  IsDateString,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateMatriculaDto {
    @IsString()
    alunoId: string;
  
    @IsString()
    cursoId: string;
  
    @IsNotEmpty()
    @IsDateString()
    dataMatricula: string;
  
    @IsString()
    status: string;
  }