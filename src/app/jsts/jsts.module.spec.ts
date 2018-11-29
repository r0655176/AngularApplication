import { JstsModule } from './jsts.module';

describe('JstsModule', () => {
  let jstsModule: JstsModule;

  beforeEach(() => {
    jstsModule = new JstsModule();
  });

  it('should create an instance', () => {
    expect(jstsModule).toBeTruthy();
  });
});
