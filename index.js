function getDogImage(num = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
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
        responseJson.message.reduce((total, currentval) => {
            return total + `<img src="${currentval}" class="results-img">`
        },'')
    )
  }

  $(watchForm);