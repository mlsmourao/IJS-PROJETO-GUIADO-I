import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
  } from 'class-validator';
  
  export class CreateCursoDto {
    @IsString()
    nome: string;
  
    @IsString()
    descricao: string;
  
    @IsNumber()
    cargaHoraria: number;

  }