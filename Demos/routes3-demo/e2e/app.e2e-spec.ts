import { Routes3DemoPage } from './app.po';

describe('routes3-demo App', function() {
  let page: Routes3DemoPage;

  beforeEach(() => {
    page = new Routes3DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
