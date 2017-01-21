import { Ng2labPage } from './app.po';

describe('ng2lab App', function() {
  let page: Ng2labPage;

  beforeEach(() => {
    page = new Ng2labPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
