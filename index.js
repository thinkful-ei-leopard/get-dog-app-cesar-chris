function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }

  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();

      let inputVal = $('#number').val();
      
      for (let i = 1; i <= inputVal; i++){
        getDogImage();
      }
    });
  } 

  $(watchForm);