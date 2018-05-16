import { UserSettingsModuleModule } from './user-settings-module.module';

describe('UserSettingsModuleModule', () => {
  let userSettingsModuleModule: UserSettingsModuleModule;

  beforeEach(() => {
    userSettingsModuleModule = new UserSettingsModuleModule();
  });

  it('should create an instance', () => {
    expect(userSettingsModuleModule).toBeTruthy();
  });
});
