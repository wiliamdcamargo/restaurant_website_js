const Appetizers = () => { // PART 1
    const appetizersContent = document.createElement('div'); // PART 1
    appetizersContent.setAttribute('class', 'container'); // PART 1

    const appetizersHeader = document.createElement('h1'); // PART 1
       appetizersHeader.innerHTML = 'APPETIZERS'; // PART 1
    
    const appetizersDiv = document.createElement('div'); // PART 1
    appetizersDiv.style.gap = '5px'; // PART 1

    const appertizersImgOne = document.createElement('img'); // PART 1
    appertizersImgOne.setAttribute('src', './imgs/appertizers-1.png'); // PART 1
    appertizersImgOne.setAttribute('height', '250px'); // PART 1
    appertizersImgOne.setAttribute('alt', 'Mandioca frita'); // PART 1
    appertizersImgOne.style.borderRadius = '10px'; // PART 1
    appetizersDiv.appendChild(appertizersImgOne); // PART 1

    const appertizersImgTwo = document.createElement('img'); // PART 1
    appertizersImgTwo.setAttribute('src', './imgs/appertizers-2.png'); // PART 1
    appertizersImgTwo.setAttribute('height', '250px'); // PART 1
    appertizersImgTwo.setAttribute('alt', 'Coxinha'); // PART 1
    appertizersImgTwo.style.borderRadius = '10px'; // PART 1
    appetizersDiv.appendChild(appertizersImgTwo); // PART 1

    const appertizersImgThree = document.createElement('img'); // PART 1
    appertizersImgThree.setAttribute('src', './imgs/appertizers-3.png'); // PART 1
    appertizersImgThree.setAttribute('height', '250px'); // PART 1
    appertizersImgThree.setAttribute('alt', 'Pastel'); // PART 1
    appertizersImgThree.style.borderRadius = '10px'; // PART 1
    appetizersDiv.appendChild(appertizersImgThree); // PART 1

    appetizersContent.appendChild(appetizersHeader); // PART 1
    appetizersContent.appendChild(appetizersDiv); // PART 1

    return appetizersContent; // PART 1
}; // PART 1

export default Appetizers; // PART 1