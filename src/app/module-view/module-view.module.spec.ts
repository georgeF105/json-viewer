import { ModuleViewModule } from './module-view.module';

describe('ModuleViewModule', () => {
  let moduleViewModule: ModuleViewModule;

  beforeEach(() => {
    moduleViewModule = new ModuleViewModule();
  });

  it('should create an instance', () => {
    expect(moduleViewModule).toBeTruthy();
  });
});
