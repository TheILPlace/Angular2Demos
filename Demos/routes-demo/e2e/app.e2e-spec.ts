import { RoutesDemoPage } from './app.po';

describe('routes-demo App', function() {
  let page: RoutesDemoPage;

  beforeEach(() => {
    page = new RoutesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
