import Header from './components/Header.js';
import InterfaceSection from './components/InterfaceSection.js';
import ResultSection from './components/ResultSection.js';

export default class App {
  constructor($target) {
    const header = new Header({
      $target,
      // 모바일에서 메뉴 클릭시 navSideBar 보이기
    });

    const contents = document.createElement('main');
    contents.id = 'contents';
    $target.appendChild(contents);

    const contentsWrapper = document.createElement('div');
    contentsWrapper.className = 'contentsWrapper';
    contents.appendChild(contentsWrapper);

    const interfaceSection = new InterfaceSection({
      $target: contentsWrapper,
      onFilter: (methodSelected, materialSelected, isToggle) => {
        resultSection.setState(methodSelected, materialSelected, isToggle);
      },
    });

    const resultSection = new ResultSection({
      $target: contentsWrapper,
    });

    // navSideBar
  }
}
