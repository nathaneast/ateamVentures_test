export default class EmptyResultCard {
  constructor({ $target }) {
    this.emptyCardWrapper = document.createElement('div');
    $target.appendChild(this.emptyCardWrapper);

    this.render();
  }

  render() {
    this.emptyCardWrapper.innerHTML = `
      <span>조건에 맞는 요청 x</span>
    `;
  }
}
