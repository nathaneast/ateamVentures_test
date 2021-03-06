import MultiSelect from './MultiSelect.js';

export default class InterfaceSection {
  constructor({ $target, onFilter }) {
    console.log($target, 'InterfaceSection $target')

    this.onFilter = onFilter;
    this.methodSelected = new Set([]);
    this.materialSelected = new Set([]);

    this.methodCheckBoxesId = 'method-checkBoxes';
    this.materialCheckBoxesId = 'material-checkBoxes';
    this.methodSelectBoxesId = 'method-selectBoxes';
    this.materialSelectBoxesId = 'material-selectBoxes';

    this.toggle = false;

    this.section = document.createElement('section');
    this.section.className = 'interface';
    $target.appendChild(this.section);

    this.render();
  }

  resetSelected() {
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

    this.onFilter(this.methodSelected, this.materialSelected, this.toggle);
  }

  render() {
    this.section.innerHTML = `
      <div>
        <h2>들어온 요청</h2>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      </div>
      <div class='selectController' />
    `;

    const selectController = document.querySelector('.selectController');
    const selectList = document.createElement('article');
    selectList.className = 'selectList';
    selectController.appendChild(selectList);

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

    // 필터링 리셋
    const filter = document.createElement('div');
    const filterImg = document.createElement('img');
    const filterSpan = document.createElement('span');

    filter.className = 'filter';

    filterImg.src = 'src/images/interface_filter_reset.png';
    filterSpan.innerText = '필터링 리셋';

    selectList.appendChild(filter);
    filter.appendChild(filterImg);
    filter.appendChild(filterSpan);

    filter.addEventListener('click', () => {
      this.resetSelected();
      method.resetCheckBox();
      material.resetCheckBox();
      this.onFilter(this.methodSelected, this.materialSelected, this.toggle);
    });

    // 토글
    const toggleWrapper = document.createElement('div');
    selectController.appendChild(toggleWrapper);

    toggleWrapper.innerHTML = `
      <label class="toggle-switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <span>상담중인 요청만 보기</span>
    `;

    const toggleSwitch = document.querySelector('.toggle-switch');
    toggleSwitch.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') {
        this.toggle = !this.toggle;
        this.onFilter(this.methodSelected, this.materialSelected, this.toggle);
      }
    });
  }
}
