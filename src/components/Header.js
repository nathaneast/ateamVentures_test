export default class Header {
  constructor({ $target }) {
    this.header = document.createElement('header');
    this.header.id = 'header';
    $target.appendChild(this.header);

    this.render();
  }

  render() {
    this.header.innerHTML = `
      <div class='header-logo'>
        <img src='src/images/header_logo.png' width='150px' height='20px' alt='header_logo' />
      </div>
      <nav class='navBar'>
        <div class='navBar-item'>
          <img src='src/images/nav_icon.png' width='15px'   alt='nav_icon' />
          <span>A가공업체</span>
        </div>
        <div class='navBar-item'>
          <span> ㅣ </span>
        </div>
        <div class='navBar-item'>
          <span>로그아웃</span>
        </div>
      </nav>
    `;
  }
}
