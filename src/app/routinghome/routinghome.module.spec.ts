import { RoutinghomeModule } from './routinghome.module';

describe('RoutinghomeModule', () => {
  let routinghomeModule: RoutinghomeModule;

  beforeEach(() => {
    routinghomeModule = new RoutinghomeModule();
  });

  it('should create an instance', () => {
    expect(routinghomeModule).toBeTruthy();
  });
});
