import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  variations = {
    size: ['sm', 'lg'],
    type: [
      'primary',
      'outline-primary',
      'success',
      'outline-success',
      'danger',
      'outline-danger',
      'warning',
      'outline-warning',
    ],
    disabled: [true],
    active: [true]
  }
}
