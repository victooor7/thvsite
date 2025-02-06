
const elementosDuvida = document.querySelectorAll('.duvida');


elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
  
    elementosDuvida.forEach(function (item) {
      if (item !== duvida) {
        item.classList.remove('ativa');
      }
    });
    
   
    duvida.classList.toggle('ativa');
  });
});
