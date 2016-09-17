import { FormsTemplateDemoPage } from './app.po';

describe('forms-template-demo App', function() {
  let page: FormsTemplateDemoPage;

  beforeEach(() => {
    page = new FormsTemplateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
