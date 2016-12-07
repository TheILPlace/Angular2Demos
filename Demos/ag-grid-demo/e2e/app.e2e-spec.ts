import { Grid1Page } from './app.po';

describe('grid1 App', function() {
  let page: Grid1Page;

  beforeEach(() => {
    page = new Grid1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
