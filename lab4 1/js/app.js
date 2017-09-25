

document.getElementById('monto').addEventListener('input', function (e) { 
   let m= e.target.value;//para capturar el numero
   let i=m*0.02;
   console.log(i);

   document.getElementById('interes').innerHTML=(m*0.02).toFixed(2);
   document.getElementById('rev').innerHTML=(m*0.05).toFixed(2);
   document.getElementById('total').innerHTML=((m*0.02)+(m*0.05)).toFixed(2);

   document.getElementById('interesm').innerHTML=((m*0.02)%12).toFixed(2);
   document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);
   document.getElementById('totalm').innerHTML=(((m*0.02)+(m*0.05))/12).toFixed(2); 


   document.getElementById('cdp1m').innerHTML=((m*3.92)*100%12).toFixed(2);
   document.getElementById('interesm').innerHTML=((m*0.02)%12).toFixed(2);
    document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);

document.getElementById('cdp2m').innerHTML=((m*4.88)*100%12).toFixed(2);
document.getElementById('interesm').innerHTML=((m*0.02)%12).toFixed(2);
document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);



    




});     