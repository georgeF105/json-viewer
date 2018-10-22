import { StatsReportModule } from './stats-report.module';

describe('StatsReportModule', () => {
  let statsReportModule: StatsReportModule;

  beforeEach(() => {
    statsReportModule = new StatsReportModule();
  });

  it('should create an instance', () => {
    expect(statsReportModule).toBeTruthy();
  });
});
