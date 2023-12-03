const Navbar = () => {
  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar fixed-top');

  const navbarHeader = document.createElement('header');
  navbarContent.appendChild(navbarHeader);

  const navbarNav = document.createElement('nav');
  navbarHeader.appendChild(navbarNav);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('id', 'menu-toggle');
  checkbox.setAttribute('class', 'menu-toggle');
  checkbox.setAttribute('type', 'checkbox');
  navbarNav.appendChild(checkbox);

  const checkboxLabel = document.createElement('label');
  checkboxLabel.setAttribute('for', 'menu-toggle');
  checkboxLabel.setAttribute('class', 'sandwich-icon');
  navbarNav.appendChild(checkboxLabel);
  
  const navbarUL = document.createElement('ul');
  navbarNav.appendChild(navbarUL);

  const list1 = document.createElement('li');
  list1.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list1);

  const navLink1 = document.createElement('a');
  navLink1.setAttribute('id', 'home');
  navLink1.setAttribute('class', 'mx-2');
  navLink1.setAttribute('href', '#');
  navLink1.innerHTML = 'Home';
  list1.appendChild(navLink1);

  const list2 = document.createElement('li');
  list2.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list2);

  const navLink2 = document.createElement('a');
  navLink2.setAttribute('id', 'appetizers');
  navLink2.setAttribute('class', 'mx-2');
  navLink2.setAttribute('href', '#');
  navLink2.innerHTML = 'Appetizers';
  list2.appendChild(navLink2);

  const list3 = document.createElement('li');
  list3.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list3);

  const navLink3 = document.createElement('a');
  navLink3.setAttribute('id', 'menu');
  navLink3.setAttribute('class', 'mx-2');
  navLink3.setAttribute('href', '#');
  navLink3.innerHTML = 'Menu';
  list3.appendChild(navLink3);

  const list4 = document.createElement('li');
  list4.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list4);

  const navLink4 = document.createElement('a');
  navLink4.setAttribute('id', 'foodgallery');
  navLink4.setAttribute('class', 'mx-2');
  navLink4.setAttribute('href', '#');
  navLink4.innerHTML = 'Food Gallery';
  list4.appendChild(navLink4);

  const list5 = document.createElement('li');
  list5.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list5);

  const navLink5 = document.createElement('a');
  navLink5.setAttribute('id', 'orderonline');
  navLink5.setAttribute('class', 'mx-2');
  navLink5.setAttribute('href', '#');
  navLink5.innerHTML = 'Order Online';
  list5.appendChild(navLink5);

  const list6 = document.createElement('li');
  list6.setAttribute('class', 'nav-item list-unstyled mx-2');
  navbarUL.appendChild(list6);

  const navLink6 = document.createElement('a');
  navLink6.setAttribute('id', 'contact');
  navLink6.setAttribute('class', 'mx-2');
  navLink6.setAttribute('href', '#');
  navLink6.innerHTML = 'Contact';
  list6.appendChild(navLink6);



  // const navLinks = document.createElement('ul');
  // navLinks.setAttribute('class', 'navLink');

  // const navList = () => {
  //   const list = document.createElement('li');
  //   list.setAttribute('class', 'nav-item list-unstyled mx-2');

  //   // const checkbox = document.createElement('input');
  //   // checkbox.setAttribute('type', 'checkbox');
  //   // checkbox.setAttribute('id', 'menu-toggle');
  //   // checkbox.setAttribute('class', 'menu-toggle');
  //   // list.appendChild(checkbox);

  //   // const checkboxLabel = document.createElement('label');
  //   // checkboxLabel.setAttribute('for', 'menu-toggle');
  //   // checkboxLabel.setAttribute('class', 'sandwich-icon');
  //   // list.appendChild(checkboxLabel);

  //   const navLink1 = document.createElement('a');
  //   navLink1.setAttribute('id', 'home');
  //   navLink1.setAttribute('class', 'mx-2');
  //   navLink1.setAttribute('href', '#');
  //   navLink1.innerHTML = 'Home';
  //   list.appendChild(navLink1);

  //   const navLink2 = document.createElement('a'); // PART 1
  //   navLink2.setAttribute('id', 'appetizers'); // PART 1
  //   navLink2.setAttribute('class', 'mx-2'); // PART 1
  //   navLink2.setAttribute('href', '#'); // PART 1
  //   navLink2.innerHTML = 'Appetizers'; // PART 1
  //   list.appendChild(navLink2); // PART 1

  //   const navLink3 = document.createElement('a');
  //   navLink3.setAttribute('id', 'menu');
  //   navLink3.setAttribute('class', 'mx-2');
  //   navLink3.setAttribute('href', '#');
  //   navLink3.innerHTML = 'Menu';
  //   list.appendChild(navLink3);

  //   const navLink4 = document.createElement('a'); // PART 3
  //   navLink4.setAttribute('id', 'foodgallery'); // PART 3
  //   navLink4.setAttribute('class', 'mx-2'); // PART 3
  //   navLink4.setAttribute('href', '#'); // PART 3
  //   navLink4.innerHTML = 'Food Gallery'; // PART 3
  //   list.appendChild(navLink4); // PART 3


  //   const navLink5 = document.createElement('a'); // PART 2
  //   navLink5.setAttribute('id', 'orderonline'); // PART 2
  //   navLink5.setAttribute('class', 'mx-2'); // PART 2
  //   navLink5.setAttribute('href', '#'); // PART 2
  //   navLink5.innerHTML = 'Order Online'; // PART 2
  //   list.appendChild(navLink5); // PART 2

  //   const navLink6 = document.createElement('a');
  //   navLink6.setAttribute('id', 'contact');
  //   navLink6.setAttribute('class', 'mx-2');
  //   navLink6.setAttribute('href', '#');
  //   navLink6.innerHTML = 'Contact';
  //   list.appendChild(navLink6);

  //   return list;
  // };

  // navbarContent.appendChild(navLinks);
  // navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;
