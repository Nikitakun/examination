import { LoginModuleModule } from './login.module';

describe('LoginModuleModule', () => {
  let loginModuleModule: LoginModuleModule;

  beforeEach(() => {
    loginModuleModule = new LoginModuleModule();
  });

  it('should create an instance', () => {
    expect(loginModuleModule).toBeTruthy();
  });
});
