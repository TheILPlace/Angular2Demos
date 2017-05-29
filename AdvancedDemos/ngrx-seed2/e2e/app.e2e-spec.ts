import { NgrxSeedPage } from './app.po';

describe('ngrx-seed App', () => {
  let page: NgrxSeedPage;

  beforeEach(() => {
    page = new NgrxSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
