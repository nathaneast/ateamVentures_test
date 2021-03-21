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

  setState(methodSelected, materialSelected, isToggle) {
    const allSelected = [...methodSelected, ...materialSelected];
    let filterResult;

    if (allSelected.length) {
      filterResult = this.originalData.filter((item) => {
        const values = [...item.method, ...item.material];
        let isReturn = false;

        for (let i = 0; i < values.length; i++) {
          let isInclude = allSelected.includes(values[i]);
          if (isInclude) {
            isReturn = true;
            break;
          }
        }

        if (isReturn) {
          return item;
        }
      });
    } else {
      filterResult = this.originalData;
    }

    if (isToggle) {
      this.renderData = filterResult.filter((item) => item.status === '상담중');
    } else {
      this.renderData = filterResult;
    }

    this.render();
  }

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
              cardNum: index + 1,
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
