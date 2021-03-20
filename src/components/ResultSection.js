import { api } from '../api/sampleDataAPI.js';
import Card from './Card.js';

export default class ResultSection {
  constructor({ $target }) {
    this.data = null;
    this.isLoading = true;
    this.error = null;
    this.originalData = null;
    this.renderData = null;

    const fetchData = async () => await api.fetchSampleData();
    fetchData().then((res) => {
      // console.log(res);
      if (res.isError) {
        this.error = {
          message: res.data.message,
          status: res.data.status,
        };
      } else {
        this.originalData = res.data;
        this.renderData = res.data;
        this.isLoading = false;
      }
      this.render();
    });

    this.section = document.createElement('section');
    this.section.className = 'result';
    $target.appendChild(this.section);

    this.render();
  }

  //TODO: 에러, 로딩, 없는글 컴포넌트로 빼기
  displayError() {
    this.section.innerHTML = `
    <div>
      <p>${this.error.message}</p>
      <p>${this.error.status}</p>
    </div>
  `;
  }

  displayLoading() {
    this.section.innerHTML = `
      <div>Loading...</div>
    `;
  }

  render() {
    if (this.isLoading) {
      this.displayLoading();
    } else {
      if (this.error) return this.displayError();

      if (this.renderData.length) {
        this.section.innerHTML = ``;
        const cardList = document.createElement('section');
        cardList.className = 'cardList';
        this.section.appendChild(cardList);

        this.renderData.map(
          (item, index) =>
            new Card({
              $target: cardList,
              key: item.id,
              title: item.title,
              amount: item.amount,
              client: item.client,
              count: item.count,
              due: item.due,
              material: item.material,
              method: item.method,
              status: item.status,
              cardNum: index + 1
            })
        );
      } else {
        this.section.innerHTML = `
          <div>조건에 맞는 요청 없다</div>
        `;
      }
    }
  }
}
