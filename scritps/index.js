import Home from './home.js';
import Menu from './menu.js';
import Navbar from './navbar.js';
import Contact from './contact.js';
import Appetizers from './appetizers.js'; // PART 1
import OrderOnline from './orderonline.js'; // PART 2
import FoodGallery from './foodgallery.js'; // PART 3

const Index = () => {
  function italicsBody() {
    document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
  }
  italicsBody();
  
  const content = document.getElementById('content');
  const navbar = Navbar();
  content.appendChild(navbar);
  const home = Home();
  content.appendChild(home);
  
  // NAVBAR CLICKING
  
  const menu = Menu();
  const contact = Contact();
  const appetizers = Appetizers(); // PART 1
  const orderonline = OrderOnline(); // PART 2
  const foodgallery = FoodGallery(); // PART 3
  
  const link1 = document.getElementById('home');
  link1.addEventListener('click', () => {
    content.replaceChild(home, content.childNodes[1]);
  });

  const link2 = document.getElementById('appetizers'); // PART 1
  link2.addEventListener('click', () => { // PART 1
    content.replaceChild(appetizers, content.childNodes[1]); // PART 1
  }); // PART 1
  
  const link3 = document.getElementById('menu');
  link3.addEventListener('click', () => {
    content.replaceChild(menu, content.childNodes[1]);
  });

  const link4 = document.getElementById('foodgallery'); // PART 3
  link4.addEventListener('click', () => { // PART 3
    content.replaceChild(foodgallery, content.childNodes[1]); // PART 3
  }); // PART 3

  const link5 = document.getElementById('orderonline'); // PART 2
  link5.addEventListener('click', () => { // PART 2
    content.replaceChild(orderonline, content.childNodes[1]); // PART 2
  }); // PART 2
  
  const link6 = document.getElementById('contact');
  link6.addEventListener('click', () => {
    content.replaceChild(contact, content.childNodes[1]);
  });
};

export default Index;
