import { ModulesroutingModule } from './modulesrouting.module';

describe('ModulesroutingModule', () => {
  let modulesroutingModule: ModulesroutingModule;

  beforeEach(() => {
    modulesroutingModule = new ModulesroutingModule();
  });

  it('should create an instance', () => {
    expect(modulesroutingModule).toBeTruthy();
  });
});
