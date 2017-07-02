import { RwaTriviaPage } from './app.po';

describe('rwa-trivia App', () => {
  let page: RwaTriviaPage;

  beforeEach(() => {
    page = new RwaTriviaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
