import { AnatomieModule } from './anatomie.module';

describe('AnatomieModule', () => {
  let anatomieModule: AnatomieModule;

  beforeEach(() => {
    anatomieModule = new AnatomieModule();
  });

  it('should create an instance', () => {
    expect(anatomieModule).toBeTruthy();
  });
});
