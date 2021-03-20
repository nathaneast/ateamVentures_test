import { showCheckBoxes } from '../util/selector.js';

export default class MultiSelect {
  constructor({
    $target,
    anySelector,
    title,
    items,
    setSelected,
    selectBoxesId,
    checkBoxesId,
  }) {
    this.setSelected = setSelected;
    this.anySelector = anySelector;
    this.title = title;
    this.items = items;
    this.selectBoxesId = selectBoxesId;
    this.checkBoxesId = checkBoxesId;

    this.multiSelect = document.createElement('div');
    this.multiSelect.className = 'multiSelect';
    $target.appendChild(this.multiSelect);

    this.render();
  }

  resetCheckBox() {
    const checkBoxes = document.getElementById(this.checkBoxesId);
    const labels = checkBoxes.getElementsByTagName('label');

    for (let i = 0; i < labels.length; i++) {
      const input = labels[i].getElementsByTagName('input')[0];
      input.checked = false;
    }
  }

  render() {
    this.multiSelect.innerHTML = `
        <div class="selectBox" id=${this.selectBoxesId}>
          <select>
            <option>${this.title}</option>
          </select>
          <div class="overSelect"></div>
        </div>
        <div class='checkboxes' id=${this.checkBoxesId}>
        </div>
    `;

    const checkBoxes = document.getElementById(this.checkBoxesId);
    const selectBoxes = document.getElementById(this.selectBoxesId);

    this.items.forEach((item) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');

      input.type = 'checkbox';
      input.value = item;
      span.innerText = item;

      label.appendChild(input);
      label.appendChild(span);
      checkBoxes.appendChild(label);
    });

    selectBoxes.addEventListener('click', () =>
      showCheckBoxes(this.anySelector, this.checkBoxesId)
    );
    checkBoxes.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') {
        this.setSelected(this.anySelector, e.target.value);
      }
    });
  }
}
