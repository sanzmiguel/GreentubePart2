import { Part2Page } from './app.po';

describe('part2 App', () => {
  let page: Part2Page;

  beforeEach(() => {
    page = new Part2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
