import BaseButton from 'ember-bootstrap/components/base/bs-button';
import defaultValue from 'ember-bootstrap/utils/default-decorator';

export default class MayaButton extends BaseButton {
  @defaultValue
  type = 'primary';
}
