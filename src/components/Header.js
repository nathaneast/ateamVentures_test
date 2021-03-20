export default class Header {
  constructor({ $target }) {
    this.header = document.createElement('header');
    this.header.className = 'header';
    $target.appendChild(this.header);

    this.render();
  }

  render() {
    this.header.innerHTML = `
      <div>헤더 </div>
    `;
  }
}
