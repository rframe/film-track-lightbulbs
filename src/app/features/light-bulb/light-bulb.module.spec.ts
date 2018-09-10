import { LightBulbModule } from './light-bulb.module';

describe('LightBulbModule', () => {
  let lightBulbModule: LightBulbModule;

  beforeEach(() => {
    lightBulbModule = new LightBulbModule();
  });

  it('should create an instance', () => {
    expect(lightBulbModule).toBeTruthy();
  });
});
