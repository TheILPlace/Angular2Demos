import { BindingDemosPage } from './app.po';

describe('binding-demos App', function() {
  let page: BindingDemosPage;

  beforeEach(() => {
    page = new BindingDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
