import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Initialize home page
loadHome();

document.getElementById('home-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('contact-btn').addEventListener('click', loadContact);
