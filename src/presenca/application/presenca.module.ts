import { Module, Type, DynamicModule } from '@nestjs/common';
import { PresencaFactory } from '../domain/factories/presenca.factory';
import { PresencaService } from './presenca.service';
import { PresencaController } from '../presenter/http/presenca.controller';

@Module({
  controllers: [PresencaController],
  providers: [PresencaService, PresencaFactory],
})
export class PresencaModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: PresencaModule,
      imports: [infrastructureModule],
    };
  }
}
