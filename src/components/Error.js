export default class Error {
  constructor({ $target, message, status }) {
    this.message = message;
    this.status = status;

    this.errorWrapper = document.createElement('div');
    $target.appendChild(this.errorWrapper);

    this.render();
  }

  render() {
    this.errorWrapper.innerHTML = `
      <p>${this.error.message}</p>
      <p>${this.error.status}</p>
    `;
  }
}
