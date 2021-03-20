export default class InterfaceSection {
  constructor({ $target }) {
    this.section = document.createElement('section');
    this.section.className = 'interface';
    $target.appendChild(this.section);

    this.render();
  }

  render() {
    this.section.innerHTML = `
      <div>인터페이스!</div>
    `;
  }
}
