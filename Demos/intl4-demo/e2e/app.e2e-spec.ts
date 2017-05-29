import { Intl4DemoPage } from './app.po';

describe('intl4-demo App', () => {
  let page: Intl4DemoPage;

  beforeEach(() => {
    page = new Intl4DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
