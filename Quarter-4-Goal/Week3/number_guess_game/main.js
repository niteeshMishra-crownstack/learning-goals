let number;

const generateRandomNumber = ()=>
{
  number = Math.floor(Math.random() * 6 +1)
  console.log(number)
}

const generate_number_btn_click = () =>
{
  document.querySelector('#section1').style.display='none'
  document.querySelector('#section2').style.display='none'
  document.querySelector('#section3').style.display='block'

  setTimeout(()=>
  {
  generateRandomNumber()

  document.querySelector('#input-value').value = " ";

  document.querySelector('#section1').style.display='none'
  document.querySelector('#section2').style.display='block'
  document.querySelector('#section3').style.display='none'

  },3000);
}

const check_number = ()=>
{
  let value = document.getElementById('field').value

  if(value == number)
  {
    alert("CONGRATS!! YOU HAVE GURSSED THE RIGHT NUMBER")
  }

  else{
    alert("oops!! Your Guess is wrong")
  }

  generate_number_btn_click()
}
