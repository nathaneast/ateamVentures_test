export const displayCardStatus = (targetId) => {
  const target = document.querySelector(`#${targetId}`);

  const div = document.createElement('div');
  div.className = 'card-counseling';

  const span = document.createElement('span');
  span.innerText = '상담중';

  target.appendChild(div);
  div.appendChild(span);
};
