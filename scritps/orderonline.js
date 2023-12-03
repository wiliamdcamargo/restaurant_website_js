const OrderOnline = () => { // PART 2
    const orderOnlineContent = document.createElement('div'); // PART 2
    orderOnlineContent.setAttribute('class', 'container'); // PART 2

    const orderOnlineHeader = document.createElement('h1'); // PART 2
    orderOnlineHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5'); // PART 2
    orderOnlineHeader.innerHTML = 'ORDER ONLINE'; // PART 2
    orderOnlineContent.appendChild(orderOnlineHeader); // PART 2

    const orderonlineForm = document.createElement('form'); // PART 2
    orderonlineForm.setAttribute('action', 'https://formspree.io/f/mqkvgjzz'); // PART 2
    orderonlineForm.setAttribute('method', 'POST'); // PART 2
    orderOnlineContent.appendChild(orderonlineForm); // PART 2

    const orderOnlineLabelName = document.createElement('label'); // PART 2
    orderOnlineLabelName.setAttribute('for', 'name_field'); // PART 2
    orderOnlineLabelName.innerHTML = 'Name'; // PART 2
    orderonlineForm.appendChild(orderOnlineLabelName); // PART 2
    
    const orderOnlineInputName = document.createElement('input'); // PART 2
    orderOnlineInputName.setAttribute('type', 'text'); // PART 2
    orderOnlineInputName.setAttribute('name', 'name_field'); // PART 2
    orderOnlineInputName.setAttribute('id', 'name_field'); // PART 2
    orderOnlineInputName.required = true; // PART 2
    orderonlineForm.appendChild(orderOnlineInputName); // PART 2

    const orderOnlineLabelEmail = document.createElement('label'); // PART 2
    orderOnlineLabelEmail.setAttribute('for', 'email_field'); // PART 2
    orderOnlineLabelEmail.innerHTML = 'Email'; // PART 2
    orderonlineForm.appendChild(orderOnlineLabelEmail); // PART 2

    const orderOnlineInputEmail =  document.createElement('input'); // PART 2
    orderOnlineInputEmail.setAttribute('type', 'email'); // PART 2
    orderOnlineInputEmail.setAttribute('name', 'email_field'); // PART 2
    orderOnlineInputEmail.setAttribute('id', 'email_field'); // PART 2
    orderOnlineInputEmail.required = true; // PART 2
    orderonlineForm.appendChild(orderOnlineInputEmail); // PART 2

    const orderOnlineLabelOrder = document.createElement('label'); // PART 2
    orderOnlineLabelOrder.setAttribute('for', 'order_field'); // PART 2
    orderOnlineLabelOrder.innerHTML = 'Describe your Order'; // PART 2
    orderonlineForm.appendChild(orderOnlineLabelOrder); // PART 2

    const orderOnlineInputOrder = document.createElement('textarea'); // PART 2
    orderOnlineInputOrder.setAttribute('name', 'order_field'); // PART 2
    orderOnlineInputOrder.setAttribute('id', 'order_field'); // PART 2
    orderOnlineInputOrder.setAttribute('cols', '50'); // PART 2
    orderOnlineInputOrder.setAttribute('rows', '5'); // PART 2
    orderOnlineInputOrder.required = true; // PART 2
    orderonlineForm.appendChild(orderOnlineInputOrder); // PART 2

    const orderOnlineButton = document.createElement('input'); // PART 2
    orderOnlineButton.setAttribute('type', 'submit'); // PART 2
    orderOnlineButton.setAttribute('value', 'Submission'); // PART 2
    orderOnlineButton.setAttribute('id', 'submission'); // PART 2
    orderonlineForm.appendChild(orderOnlineButton); // PART 2

    return orderOnlineContent; // PART 2
};

export default OrderOnline; // PART 2