import CustomDatatableExtension from 'c/customDatatableExtension';
import { createElement } from 'lwc';

describe('c-custom-datatable-extension', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should create', () => {
    // given
    const element = createElement('c-custom-datatable-extension', {
      is: CustomDatatableExtension
    });

    // when
    document.body.appendChild(element);

    // then
    expect(element).toBeTruthy();
  });
});
