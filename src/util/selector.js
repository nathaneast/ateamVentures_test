let methodExpanded = false;
let materialExpanded = false;
// select 보기 상태관리 변수

const handleExpanded = (isMethod) => {
  if (isMethod) {
    methodExpanded = !methodExpanded;
  } else {
    materialExpanded = !materialExpanded;
  }
};

export const showCheckBoxes = (anySelector, checkBoxesId) => {
  const checkboxes = document.getElementById(checkBoxesId);
  let isOpen = anySelector === 'method' ? methodExpanded : materialExpanded;

  if (!isOpen) {
    checkboxes.style.display = 'block';
  } else {
    checkboxes.style.display = 'none';
  }

  handleExpanded(anySelector === 'method');
};
