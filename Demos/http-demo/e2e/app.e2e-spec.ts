import { HttpDemoPage } from './app.po';

describe('http-demo App', function() {
  let page: HttpDemoPage;

  beforeEach(() => {
    page = new HttpDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
