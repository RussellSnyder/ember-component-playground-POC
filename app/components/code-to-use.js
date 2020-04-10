import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CodeToUseComponent extends Component {
  get hasProps() {
    return this.props && Object.keys(this.props).length > 0;
  }

  get props() {
    return this.args.selected;
  }

  get codeStringStart() {
    const propsArray = this.hasProps 
      ? Object.keys(this.props).map(key => `@${key}="${this.props[key]}"`)
      : [];

    const propsArrayDisplay = propsArray.length < 2
      ? ` ${propsArray.join(" ")}`
      : `\n  ${propsArray.join("\n  ")}\n`

      return `<${this.args.componentName}${this.hasProps ? propsArrayDisplay : ''}>\n`
  }

  get codeStringEnd() {
    return `\n</${this.args.componentName}>`
  }

  get codeString() {
    return `${this.codeStringStart}  ${this.args.yield}${this.codeStringEnd}`
  }

  @tracked isCodeViewerOpen = true;

  @action openCodeViewer() {
    this.isCodeViewerOpen = !this.isCodeViewerOpen    
  }

  @action copyCode() {
    copyToClipboard(this.codeString)
    console.log('code copied!');
  }
}

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
