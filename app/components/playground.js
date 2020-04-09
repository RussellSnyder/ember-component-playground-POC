import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class PlaygroundComponent extends Component {
  @tracked
  variations = A([]);

  get selectedArray() {
    return this.variations.filter(variation => !!variation.selected);
  }

  get selectedObject() {
    let returnObject = {};
    this.selectedArray.forEach(variation => returnObject[variation.name] = variation.selected);
    return returnObject
  }

  constructor(owner, args) {
    super(owner, args);

    const { variations } = args;

    if (variations) {
      Object.keys(args.variations).forEach(variationName => {
        let groupVariations = variations[variationName]

        this.variations.pushObject({
          name: variationName,
          variations: groupVariations,
          selected: null
        })
      });
    }
  }

  @action
  selectVariation(groupIndex, value) {
    const currentVariation = this.variations[groupIndex];
    const newVariation = {
      ...currentVariation,
      selected: value
    }
    this.variations.replace(groupIndex, 1, [newVariation])
  }
}
