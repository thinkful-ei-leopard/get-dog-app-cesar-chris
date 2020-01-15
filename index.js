function getDogImage(type) {
  fetch(`https://dog.ceo/api/breed/${type}/images/random `)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === 'error') throw (responseJson.message);
      displayResults(responseJson);
    } )
    .catch(error => alert(error));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();

    const inputVal = $('#number').val();      
    getDogImage(inputVal);
  });
} 

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">`
  )
}

$(watchForm);