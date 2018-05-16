import { RegistrationModuleModule } from './registration.module';

describe('RegistrationModuleModule', () => {
  let registrationModuleModule: RegistrationModuleModule;

  beforeEach(() => {
    registrationModuleModule = new RegistrationModuleModule();
  });

  it('should create an instance', () => {
    expect(registrationModuleModule).toBeTruthy();
  });
});
