import { IntlDemoPage } from './app.po';

describe('intl-demo App', () => {
  let page: IntlDemoPage;

  beforeEach(() => {
    page = new IntlDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
