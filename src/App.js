import Header from './components/Header.js';
import InterfaceSection from './components/InterfaceSection.js';
import ResultSection from './components/ResultSection.js';

export default class App {
  constructor($target) {
    const header = new Header({
      $target,
      // 모바일시 메뉴 클릭시 navSideBar 보이기
    });

    const interfaceSection = new InterfaceSection({
      $target,
      // resultSection.setState (셀렉, 토글 값)
    });

    const resultSection = new ResultSection({
      $target,
    });
    
    // navSideBar

  }
}
