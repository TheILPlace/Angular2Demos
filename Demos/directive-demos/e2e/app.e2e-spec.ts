import { DirectiveDemosPage } from './app.po';

describe('directive-demos App', function() {
  let page: DirectiveDemosPage;

  beforeEach(() => {
    page = new DirectiveDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
