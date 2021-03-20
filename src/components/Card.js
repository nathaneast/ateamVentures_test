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
  }) {
    this.amount = amount;
    this.client = client;
    this.count = count;
    this.due = due;
    this.material = material;
    this.method = method;
    this.status = status;
    this.title = title;

    this.card = document.createElement('article');
    $target.appendChild(this.card);

    this.render();
  }

  render() {
    this.card.innerHTML = `
      <div>
        <h2>${this.title}</h2>
        <h3>${this.client}</h3>
      </div>
      <div>
        <span>${this.due}까지 납기</span>
      </div>
      <div>
        <div>
          <span>도면개수</span>
          <span>${this.count}개</span>
        </div>
        <div>
          <span>총수량</span>
          <span>${this.amount}개</span>
        </div>
        <div>
          <span>가공방식</span>
          <span>${this.method.join(',')}</span>
        </div>
        <div>
          <span>재료</span>
          <span>${this.material.join(',')}</span>
        </div>
      </div>
      <div>
        <button>요청 내역보기</button>
        <button>채팅하기</button>
      </div>
    `;
  }
}
