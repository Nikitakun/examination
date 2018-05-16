import { MarkUpModuleModule } from './mark-up.module';

describe('MarkUpModuleModule', () => {
  let markUpModuleModule: MarkUpModuleModule;

  beforeEach(() => {
    markUpModuleModule = new MarkUpModuleModule();
  });

  it('should create an instance', () => {
    expect(markUpModuleModule).toBeTruthy();
  });
});
