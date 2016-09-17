import { FormsDataDemoPage } from './app.po';

describe('forms-data-demo App', function() {
  let page: FormsDataDemoPage;

  beforeEach(() => {
    page = new FormsDataDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
