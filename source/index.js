import createMenu from './menu';
import './style.scss';
import 'materialize-css/dist/css/materialize.min.css';

var menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');

document.body.appendChild(menu);
