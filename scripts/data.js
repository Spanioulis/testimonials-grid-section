// Cargar el archivo JSON
fetch('../db/data.json')
    .then((response) => response.json())
    .then((data) => {
        const testimonials = data.testimonials;
        console.log('testimonials:', testimonials);
        const testimonialCards = document.querySelectorAll('.card');

        // Iterar sobre los elementos .card y asignar datos
        testimonialCards.forEach((card, index) => {
            const cardHeader = card.querySelector('.card__header h2');
            const cardSubtitle = card.querySelector('.card__header p');
            const cardDescription = card.querySelector('.card__description p');
            const cardQuote = card.querySelector('.card__quote p');

            cardHeader.textContent = testimonials[index].name;
            cardSubtitle.textContent = testimonials[index].subtitle;
            cardDescription.textContent = testimonials[index].description;
            cardQuote.textContent = testimonials[index].quote;
        });
    })
    .catch((error) => console.error('Error al cargar los datos:', error));
