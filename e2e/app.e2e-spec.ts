import { Ang4WebsitePage } from './app.po';

describe('ang4-website App', () => {
  let page: Ang4WebsitePage;

  beforeEach(() => {
    page = new Ang4WebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
