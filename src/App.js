import Header from './components/Header.js';

export default class App {
  constructor($target) {
    const header = new Header({
      $target,
    });
  }
}
