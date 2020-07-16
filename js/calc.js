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
            var color = document.getElementById("color").value;
            var format = document.getElementById('format').value;
            //получаем ссылку на чекбокс
            var is_layout = document.getElementById("layout");
            var is_editing = document.getElementById("editing");
            var is_correction = document.getElementById("correction");
            var content = document.getElementById("question__content");
            var wrap = document.getElementById("calc__wrapper");

            var count_page = 0;
            var price = 0;
            var cena;
            var new_cena;

            if (num_page <= 49) {
              content.innerHTML = "количество страниц должно быть не менее 50";
          } else if (num_page >= 50 && num_page <= 99) {
              count_page = 17;
              content.innerHTML = "";
              price2()
          } else if (num_page >= 100 && num_page <= 199) {
              count_page = 14;
              content.innerHTML = "";
              price3()
          } else if (num_page >= 200 && num_page <= 299) {
              count_page = 11;
              content.innerHTML = "";
              price4()
          } else if (num_page >= 300) {
              count_page = 9;
              content.innerHTML = "";
              price5()
          } 

            function sale() {
                if (num_pub >= 2 && num_pub <= 10) {
                    new_cena = cena - (cena / 100 * 10);
                } else if (num_pub >= 11 && num_pub <= 20) {
                    new_cena = cena - (cena / 100 * 20);
                } else if (num_pub >= 21 && num_pub <= 30) {
                    new_cena = cena - (cena / 100 * 30);
                } else if (num_pub >= 31) {
                    new_cena = cena - (cena / 100 * 40);
                } else if (num_pub === "") {
                    content.innerHTML = "заполните тираж";
                } else if (num_pub === "1") {
                    content.innerHTML = "тираж должен быть больше единицы";
                }
            }

            function price2() {
              switch (format) {
                 case "А5(145х205)":
                    cena = 250;
                    sale()
                    break
                 case "А4(205х290)":
                    cena = 470;
                    sale()
                    break   
                  case "А6(100х140)":
                    cena = 140;
                    sale()
                    break   
                  case "B5(170х240)":
                    cena = 270;
                    sale()
                    break   
                  case "210x210":
                    cena = 280;
                    sale()
                    break   
              }
            }

             function price3() {
              switch (format) {
                 case "А5(145х205)":
                    cena = 280;
                    sale()
                    break
                 case "А4(205х290)":
                    cena = 400;
                    sale()
                    break   
                  case "А6(100х140)":
                    cena = 170;
                    sale()
                    break   
                  case "B5(170х240)":
                    cena = 360;
                    sale()
                    break   
                  case "210x210":
                    cena = 370;
                    sale()
                    break   
              }
            }

             function price4() {
              switch (format) {
                 case "А5(145х205)":
                    cena = 350;
                    sale()
                    break
                 case "А4(205х290)":
                    cena = 530;
                    sale()
                    break   
                  case "А6(100х140)":
                    cena = 210;
                    sale()
                    break   
                  case "B5(170х240)":
                    cena = 470;
                    sale()
                    break   
                  case "210x210":
                    cena = 490;
                    sale()
                    break   
              }
            }

             function price5() {
              switch (format) {
                 case "А5(145х205)":
                    cena = 410;
                    sale()
                    break
                 case "А4(205х290)":
                    cena = 700;
                    sale()
                    break   
                  case "А6(100х140)":
                    cena = 280;
                    sale()
                    break   
                  case "B5(170х240)":
                    cena = 630;
                    sale()
                    break   
                  case "210x210":
                    cena = 650;
                    sale()
                    break   
              }
            }
      

          
          
          price += Number(type_cover);//+обложка
          price += Number(color);//+цветность
          price += ((is_layout.checked == true) ? parseInt(is_layout.value) : 0);//+верстка
          price += ((is_editing.checked == true) ? parseInt(is_editing.value) : 0);//+редактура
          price += ((is_correction.checked == true) ? parseInt(is_correction.value) : 0);//+коррект
          price += num_page * count_page;
          price += new_cena * num_pub;


        result.innerHTML = price + '₽';
}
