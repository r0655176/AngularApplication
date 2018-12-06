import { BindingModule } from './binding.module';

describe('BindingModule', () => {
  let bindingModule: BindingModule;

  beforeEach(() => {
    bindingModule = new BindingModule();
  });

  it('should create an instance', () => {
    expect(bindingModule).toBeTruthy();
  });
});
