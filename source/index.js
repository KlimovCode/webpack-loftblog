import createMenu from './menu';
import './style.scss';

var menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');

document.body.appendChild(menu);
