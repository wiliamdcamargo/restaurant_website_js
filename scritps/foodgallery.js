const FoodGallery = () => { // PART 3
    const foodGalleryContent = document.createElement('div'); // PART 3
    foodGalleryContent.setAttribute('class', 'container'); // PART 3

    const foodGalleryHeader = document.createElement('h1'); // PART 3
    foodGalleryHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5'); // PART 3
    foodGalleryHeader.innerHTML = 'FOOD GALLERY'; // PART 3
    foodGalleryContent.appendChild(foodGalleryHeader); // PART 3

    const foodGalleryDiv = document.createElement('div'); // PART 3
    foodGalleryDiv.setAttribute('class', 'gallery'); // PART 3
    foodGalleryContent.appendChild(foodGalleryDiv); // PART 3

    let images = [ // PART 3
        './imgs/food-gallery-11.jpg', // PART 3
        'Brigadeiro', // PART 3
        './imgs/food-gallery-2.png', // PART 3
        'Coxinha', // PART 3
        './imgs/food-gallery-3.jpg', // PART 3
        'Traditional brazillian dishes', // PART 3
        './imgs/food-gallery-4.jpg', // PART 3
        'Traditional brazillian dishes', // PART 3
        './imgs/food-gallery-5.jpg', // PART 3
        'Camarao', // PART 3
        './imgs/food-gallery-6.jpg', // PART 3
        'Cassava and meat', // PART 3
        './imgs/food-gallery-7.jpg', // PART 3
        'Feijoada', // PART 3
        './imgs/food-gallery-8.jpg', // PART 3
        'Meat, rice, beans, and french fries', // PART 3
        './imgs/food-gallery-9.jpg', // PART 3
        'Meat', // PART 3
        './imgs/food-gallery-10.jpg', // PART 3
        'Tapioca', // PART 3
        './imgs/food-gallery-1.jpg', // PART 3
        'Traditional brazillian dishes', // PART 3
        './imgs/food-gallery-12.jpg', // PART 3
        'Quindim', // PART 3
        './imgs/food-gallery-13.jpg', // PART 3
        'Mousse de Maracuja', // PART 3
        './imgs/food-gallery-14.jpg', // PART 3
        'Sweet rice', // PART 3
        './imgs/food-gallery-15.jpg', // PART 3
        'Rocambole' // PART 3
    ]; // PART 3

    for (let i = 0; i < images.length; i++) { // PART 3
        if (i == 0) { // PART 3
            if (i % 2 == 0) { // PART 3
                const foodGalleryImg = document.createElement('img'); // PART 3
                foodGalleryImg.setAttribute('src', images[i]); // PART 3
                foodGalleryImg.classList.add('row-span-2'); // PART 3
                foodGalleryImg.setAttribute('width', "300px"); // PART 3
                foodGalleryImg.setAttribute('height', "600px"); // PART 3
                foodGalleryImg.setAttribute('alt', images[i+1]); // PART 3
                foodGalleryDiv.appendChild(foodGalleryImg); // PART 3
            } // PART 3
        } else if (i == 18) { // PART 3
            if (i % 2 == 0) { // PART 3
                const foodGalleryImg = document.createElement('img'); // PART 3
                foodGalleryImg.setAttribute('src', images[i]); // PART 3
                foodGalleryImg.classList.add('row-span-2', 'col-span-2'); // PART 3
                foodGalleryImg.setAttribute('width', "600px"); // PART 3
                foodGalleryImg.setAttribute('height', "600px"); // PART 3
                foodGalleryImg.setAttribute('alt', images[i+1]); // PART 3
                foodGalleryDiv.appendChild(foodGalleryImg); // PART 3
            } // PART 3
        } else { // PART 3
            if (i % 2 == 0) { // PART 3
                const foodGalleryImg = document.createElement('img'); // PART 3
                foodGalleryImg.setAttribute('src', images[i]); // PART 3
                foodGalleryImg.setAttribute('width', "300px"); // PART 3
                foodGalleryImg.setAttribute('height', "300px"); // PART 3
                foodGalleryImg.setAttribute('alt', images[i+1]); // PART 3
                foodGalleryDiv.appendChild(foodGalleryImg); // PART 3
            } // PART 3
        } // PART 3
    } // PART 3

    return foodGalleryContent; // PART 3
}; // PART 3

export default FoodGallery; // PART 3