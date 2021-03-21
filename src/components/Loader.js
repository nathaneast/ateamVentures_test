export default class Loader {
  constructor({ $target }) {
    this.loaderWrapper = document.createElement('div');
    $target.appendChild(this.loaderWrapper);

    this.render();
  }

  render() {
    this.loaderWrapper.innerHTML = `
      <span>Loading...</span>
    `;
  }
}
