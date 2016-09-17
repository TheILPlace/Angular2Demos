import { PipesDemoPage } from './app.po';

describe('pipes-demo App', function() {
  let page: PipesDemoPage;

  beforeEach(() => {
    page = new PipesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
