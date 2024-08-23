import {
  IsBoolean,
  IsDateString,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreatePresencaDto {
    @IsString()
    matriculaId: string;
  
    @IsString()
    @IsDateString()
    dataAula: string;
  
    @IsNotEmpty()
    @IsBoolean()
    presente: boolean;
  }