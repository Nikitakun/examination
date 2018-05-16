import { LayoutModuleModule } from './layout.module';

describe('LayoutModuleModule', () => {
  let layoutModuleModule: LayoutModuleModule;

  beforeEach(() => {
    layoutModuleModule = new LayoutModuleModule();
  });

  it('should create an instance', () => {
    expect(layoutModuleModule).toBeTruthy();
  });
});
