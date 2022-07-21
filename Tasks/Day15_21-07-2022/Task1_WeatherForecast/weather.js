//Complete the Weather API Backend part using openweathermap api
const mainSection = document.querySelector('.main-section');
document.querySelector('.search-box').addEventListener('input', async (e) => {
  const search_city = e.target.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&units=metric&appid=0281bc59ea1525c0a66ffec1af8afecc`;
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      mainSection.innerHTML = `
      <section class="location">
      <div class="city">${data.name}, ${data.sys.country}</div>
      <div class="date">${TodayDate()}</div>
    </section>
    <div class="current">
      <div class="temp">${data.main.temp}°c</div>
      <div class="weather">${data.weather[0].main}</div>
      <div class="hi-low">${data.main.temp_min}°c / ${
        data.main.temp_max
      }°c</div>
    </div>
      `;
    })
    .catch((err) => {
      //inside main section add error message
      mainSection.innerHTML = `
        <div class="current">
        <div class="temp">Area Not Found</div>
        <div class="errorMessage">${err.message}</div>
        </div>
        `;
    });
});

function TodayDate() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = new Date();
  return `${days[today.getDay()]}, ${today.getDate()} ${
    months[today.getMonth()]
  } ${today.getFullYear()}`;
}
