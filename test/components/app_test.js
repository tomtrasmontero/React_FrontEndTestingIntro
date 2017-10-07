import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group together similar test
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    // find a class data-comment-box so include a . before the classname
    // on the jquery request
    expect(component.find('.data-comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.data-comment-list')).to.exist;
  });

});
