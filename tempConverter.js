const user_input = document.getElementById('user_input')

const msg=document.getElementById('msg')

const options = document.getElementById('options')

const btn = document.getElementById('btn')

const result = document.getElementById('result')

btn.addEventListener('click', ()=> {
    let value_user=user_input.value;
    if(!value_user)
    {
         msg.style.display='block';
        setTimeout(() => {
            msg.style.display='none';

        }, 3000);
    }
    else{
        if(options.value=="celsius")
        {                
              let celsius = (value_user- 32) * 5 / 9
              result.innerHTML = `<h1>Celsius = ${parseFloat(celsius).toFixed(4)} °C</h1>`
              setTimeout(() => {
              result.innerHTML = ``;
        }, 2000);
        }
        else{
            let fahrenheit = value_user * (9 / 5) + 32
            result.innerHTML = `<h1>Fahrenheit = ${parseFloat(fahrenheit).toFixed(4)} °F</h1>`
            setTimeout(() => {
                result.innerHTML = ``
          }, 2000);
        }


        setTimeout(() => {
            user_input.value=""
      }, 2000);
      
    }
})