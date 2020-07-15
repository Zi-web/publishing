const faqItems = document.querySelectorAll('.faq-item');

    for (let i = 0; i < faqItems.length; i++) {
        let item = faqItems[i];

        item.addEventListener('click', function(e) {
            let text = item.querySelector('.faq-item__content');
            let btn = item.querySelector('.faq-item__btn');
            

            faqClose(item);


            text.classList.toggle('faq-item__content--active');
            btn.classList.toggle('faq-item__btn--active');
        });
    }

    function faqClose(skip) {
        for (let i = 0; i < faqItems.length; i++) {
            let item = faqItems[i];

            if (item !== skip) {
                item.querySelector('.faq-item__content').classList.remove('faq-item__content--active');
                item.querySelector('.faq-item__btn').classList.remove('faq-item__btn--active');
            }
        }
    }