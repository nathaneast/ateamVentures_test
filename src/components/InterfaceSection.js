import MultiSelect from './MultiSelect.js';

export default class InterfaceSection {
  constructor({ $target }) {
    this.methodSelected = new Set([]);
    this.materialSelected = new Set([]);

    this.methodCheckBoxesId = 'method-checkBoxes';
    this.materialCheckBoxesId = 'material-checkBoxes';
    this.methodSelectBoxesId = 'method-selectBoxes';
    this.materialSelectBoxesId = 'material-selectBoxes';

    this.section = document.createElement('section');
    this.section.className = 'interface';
    $target.appendChild(this.section);

    this.render();
  }

  resetFiltering() {
    this.methodSelected.clear();
    this.materialSelected.clear();
  }

  setSelected(anySelected, value) {
    const targetSelected =
      anySelected === 'method' ? this.methodSelected : this.materialSelected;

    if (targetSelected.has(value)) {
      targetSelected.delete(value);
    } else {
      targetSelected.add(value);
    }
    console.log(this.methodSelected, this.materialSelected, 'setSelected');

    // 토글 로직도 해야함
  }

  render() {
    this.section.innerHTML = `
      <div>
        <h2>들어온 요청</h2>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      </div>
    `;

    const selectList = document.createElement('section');
    selectList.className = 'selectList';
    this.section.appendChild(selectList);

    const method = new MultiSelect({
      $target: selectList,
      anySelector: 'method',
      title: '가공방식',
      items: ['밀링', '선반'],
      setSelected: (anySelected, value) => this.setSelected(anySelected, value),
      selectBoxesId: this.methodSelectBoxesId,
      checkBoxesId: this.methodCheckBoxesId,
    });

    const material = new MultiSelect({
      $target: selectList,
      anySelector: 'material',
      title: '재료',
      items: ['알루미늄', '탄소강', '구리', '합금강', '강철'],
      setSelected: (anySelected, value) => this.setSelected(anySelected, value),
      selectBoxesId: this.materialSelectBoxesId,
      checkBoxesId: this.materialCheckBoxesId,
    });

    // 필터링 기능
    const filtering = document.createElement('div');
    const filterImg = document.createElement('img');
    const filterSpan = document.createElement('span');

    filtering.className = 'filtering';

    filterImg.src = 'src/images/interface_filter_reset.png';
    filterSpan.innerText = '필터링 리셋';

    selectList.appendChild(filtering);
    filtering.appendChild(filterImg);
    filtering.appendChild(filterSpan);

    filtering.addEventListener('click', () => {
      this.resetFiltering();
      method.resetCheckBox();
      material.resetCheckBox();
    });
  }
}
