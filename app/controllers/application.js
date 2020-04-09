import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  variations = {
    size: ['sm', 'lg'],
    type: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
    disabled: [true]
  }
}
