let form = document.querySelector('form');
 form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight= parseInt(document.querySelector('#weight').value);

    let result = document.querySelector('#results');
    let message = document.querySelector('#message');


    if(height < 0 || height === '' || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height} !!`;
       
    }else if(weight < 0 || weight === '' || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;

    }   else{
       const bmi = (weight/((height*height)/10000)).toFixed(2);

       result.innerHTML = `<span>${bmi}</span>`;

       if(bmi < 18){
            message.innerHTML = "You need a proper dite."
            
       }else if( 18.6 <= bmi  && bmi<=24.9){
        message.innerHTML = "Exlent! your helth is good."
       
       }
       else if(  bmi > 24.9){
        message.innerHTML = "Heyy Buddy start work-out."
        
       }
            
    } 
    
 });