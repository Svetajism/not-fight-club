// hash-роутер

// - Напиши простую функцию-роутер, которая следит за изменением 
// адреса (событие `hashchange`).

// - Если в `state` имя игрока пустое, 
// роутер должен принудительно открывать экран регистрации (`#registration`), 
// куда бы пользователь ни пытался перейти.

// - В зависимости от хэша (`#home`, `#character`, `#settings`, `#battle`), 
// роутер должен очищать контейнер `<main id="app">` 
// и вызывать метод `render(container)` соответствующего экрана.

import {renderSettings} from './screens/settings.js'
import {renderRegistration} from './screens/registration.js'
import {renderHome} from './screens/home.js'
import {renderShip} from './screens/ship.js'
import {renderBattle} from './screens/battle.js'
import { renderHeader } from './ui.js'


const routes = {
    '#/' : renderHome,
    '#/settings' : renderSettings,
    '#/registration' : renderRegistration,
    '#/ship' : renderShip,
    '#/battle' : renderBattle,
}

function router() {
    const screen = document.querySelector('#app')
    screen.innerHTML = '';
    const render = routes[location.hash] ?? renderRegistration;
    render(screen);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('DOMContentLoaded', renderHeader);