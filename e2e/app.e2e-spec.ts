import { FilmAppPage } from './app.po';

describe('film-app App', () => {
  let page: FilmAppPage;

  beforeEach(() => {
    page = new FilmAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
