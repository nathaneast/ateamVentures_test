import { displayCardStatus } from '../util/createNode.js';

export default class Card {
  constructor({
    $target,
    amount,
    client,
    count,
    due,
    material,
    method,
    status,
    title,
    cardNum,
  }) {
    this.amount = amount;
    this.client = client;
    this.count = count;
    this.due = due;
    this.material = material;
    this.method = method;
    this.status = status;
    this.title = title;
    this.cardNum = cardNum;

    this.card = document.createElement('article');
    this.card.className = 'card';
    $target.appendChild(this.card);

    this.render();
  }

  render() {
    this.card.innerHTML = `
      <div class='card-header'>
        <div class='card-title-row' id='card-title-row-${this.cardNum}'>
          <div>
            <h3 class='card-title'>${this.title}</h3>
          </div>
        </div>
        <div>
          <h4 class='card-client'>${this.client}</h4>
        </div>
      </div>

      <div class='card-due'>
        <span>${this.due}까지 납기</span>
      </div>

      <div class='card-info'>
        <div class='card-info-row'>
          <span>도면개수</span>
          <span class='card-info-value'>${this.count}개</span>
        </div>
        <div class='card-info-row'>
          <span>총수량</span>
          <span class='card-info-value'>${this.amount}개</span>
        </div>
        <div class='card-info-row'>
          <span>가공방식</span>
          <span class='card-info-value'>${this.method.join(',')}</span>
        </div>
        <div class='card-info-row'>
          <span>재료</span>
          <span class='card-info-value'>${this.material.join(',')}</span>
        </div>
      </div>

      <div class='card-buttons'>
        <input type='button' class='card-button-more' value='요청 내역보기' />
        <input type='button' class='card-button-chat' value='채팅하기' />
      </div>
    `;

    if (this.status === '상담중') {
      displayCardStatus(`card-title-row-${this.cardNum}`);
    }
  }
}
