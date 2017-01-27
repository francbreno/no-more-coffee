import { NoMoreCoffeePage } from './app.po';

describe('no-more-coffee App', function() {
  let page: NoMoreCoffeePage;

  beforeEach(() => {
    page = new NoMoreCoffeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
