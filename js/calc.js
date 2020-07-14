document.querySelector(".calc__wrapper").addEventListener("change", () => {
            let resCalc = calc();
            //document.getElementById("result").textContent = resCalc ? resCalc : 0;
        });

function calc() {
            //получаем ссылку на элемент check (Тип обложки)
            var type_cover = document.querySelector('input[name="item1"]:checked').value;
             //получаем ссылку на элемент input (Кол-во вариантов)
            var num_page = document.getElementById("num_page").value;
            var num_pub = document.getElementById("num_pub").value;
            //получаем ссылку на элемент Select (формат)
            var format = document.getElementById("format");
            var color = document.getElementById("color");
            //получаем ссылку на чекбокс (Требуется верстка?)
            var is_layout = document.getElementById("layout");
            var is_editing = document.getElementById("editing");
            var is_correction = document.getElementById("correction");
            var count_page = 0.2;
            var price = 0;
           
           price += ((Number(type_cover)) + (num_page * count_page));//стоимость обложки + кол-во страниц * цену
           price *= (Number(num_pub));//*на кол-во экземпляров
           price *= (format.options[format.selectedIndex].value);//*на формат
           price *= (color.options[color.selectedIndex].value);//*чб или цветной
           price += ((is_layout.checked == true) ? parseInt(is_layout.value) : 0); //+верстка
           price += ((is_editing.checked == true) ? parseInt(is_editing.value) : 0); //+редак
           price += ((is_correction.checked == true) ? parseInt(is_correction.value) : 0); //+коррект

            result.innerHTML = price + '₽';

            
      }
/*function calc() {
      //получаем ссылку на элемент check (Тип обложки)
      var type_cover = document.querySelector('input[name="item1"]:checked').value;
       //получаем ссылку на элемент input (Кол-во вариантов)
      var num_page = document.getElementById("num_page").value;
      var num_pub = document.getElementById("num_pub").value;
      //получаем ссылку на элемент Select (формат)
      var format = document.getElementById("format");
      var color = document.getElementById("color").value;
      //получаем ссылку на чекбокс (Требуется верстка?)
      var is_layout = document.getElementById("layout");
      var is_editing = document.getElementById("editing");
      var is_correction = document.getElementById("correction");
      var count_page = 0.2;
      var result = document.getElementById("result"); 
      var price = 0;
     
     price += ((Number(type_cover)) + (num_page * count_page));//стоимость обложки + кол-во страниц * цену
     price *= (Number(num_pub));//*на кол-во экземпляров
     price *= (format.options[format.selectedIndex].value);//*на формат

    console.log(format.options[format.selectedIndex].value);
      result.innerHTML = price + '₽';

}*/