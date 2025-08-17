window.onload = function() {
    const hour = new Date().getHours();
    const greeting = document.createElement('p');
    if(hour < 12) greeting.textContent = "Good Morning!";
    else if(hour < 18) greeting.textContent = "Good Afternoon!";
    else greeting.textContent = "Good Evening!";
    document.getElementById('home-section').appendChild(greeting);
}
const apiKey = '9d0b89f563eb06700422b6258fc8d58d';

document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  const resultDiv = document.getElementById('weather-result');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
// Replace 'YOUR_USERNAME' with your Dev.to username
fetch('https://dev.to/devi_bhavani_7b1d6d5ec14e')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('articles-list');
    data.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching articles:', error);
    document.getElementById('articles-list').innerHTML = '<li>Unable to load articles.</li>';
  });
$(document).ready(function(){
  $('.thumb').click(function(){
    const title = $(this).data('title');
    const desc = $(this).data('desc');
    const img = $(this).data('img');

    $('#project-title').text(title);
    $('#project-desc').text(desc);
    $('#project-img').attr('src', img);
  });
});
