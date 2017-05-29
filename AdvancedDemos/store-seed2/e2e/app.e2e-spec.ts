import { KapschSeedPage } from './app.po';

describe('kapsch-seed App', () => {
  let page: KapschSeedPage;

  beforeEach(() => {
    page = new KapschSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
