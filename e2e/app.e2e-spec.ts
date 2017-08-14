import { KCOMSPage } from './app.po';

describe('kcoms App', () => {
  let page: KCOMSPage;

  beforeEach(() => {
    page = new KCOMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
