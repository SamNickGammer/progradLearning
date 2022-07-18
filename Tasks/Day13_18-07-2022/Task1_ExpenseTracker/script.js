let addTransaction = document.querySelector('.btn');

addTransaction.addEventListener('click', () => {
  let text = document.getElementById('text').value;
  let amt = document.getElementById('amount').value;
  if (text == '' || amt == '') {
    alert('The Text or Amount are empty');
  } else {
    localStorage.setItem(text, amt);
  }
});

function history() {
  let incomeCount = 0,
    expenseCount = 0;
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let text = localStorage.key(i);
      let amt = localStorage.getItem(localStorage.key(i));
      if (amt.includes('-')) {
        expenseCount += Math.abs(parseFloat(amt));
      } else {
        incomeCount += parseFloat(amt);
      }
      let listUL = document.getElementById('list');
      let itemLIElement = document.createElement('li');
      itemLIElement.classList.add(`${amt.includes('-') ? `minus` : `plus`}`);
      let itext = document.createElement('p');
      itext.textContent = text;
      itemLIElement.appendChild(itext);
      let iamt = document.createElement('p');
      iamt.textContent = `${amt.includes('-') ? `` : `+`}${parseFloat(
        amt
      ).toFixed(2)}`;
      itemLIElement.appendChild(iamt);
      listUL.appendChild(itemLIElement);
    }
  }
  document.getElementById('money-plus').textContent = `$${incomeCount.toFixed(
    2
  )}`;
  document.getElementById('money-minus').textContent = `$${Math.abs(
    expenseCount
  ).toFixed(2)}`;
  document.getElementById('balance').textContent = `$${(
    incomeCount - expenseCount
  ).toFixed(2)}`;
}

window.onload = () => {
  history();
};
