import { LightBulbRoutingModule } from './light-bulb-routing.module';

describe('LightBulbRoutingModule', () => {
  let lightBulbRoutingModule: LightBulbRoutingModule;

  beforeEach(() => {
    lightBulbRoutingModule = new LightBulbRoutingModule();
  });

  it('should create an instance', () => {
    expect(lightBulbRoutingModule).toBeTruthy();
  });
});
