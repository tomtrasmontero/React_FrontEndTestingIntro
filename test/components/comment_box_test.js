import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  // function that runs before each it statement includeing inside describe block
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('data-comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      // find textarea and input new comment text inside the textarea
      // simulate is triggiring an event 'change' = text input in text area
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    })

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});
