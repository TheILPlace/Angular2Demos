import { Routes2DemoPage } from './app.po';

describe('routes2-demo App', function() {
  let page: Routes2DemoPage;

  beforeEach(() => {
    page = new Routes2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
