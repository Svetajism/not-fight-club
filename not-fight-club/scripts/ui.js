// renderHeader(): навигация + имя игрока, зовётся один раз
// import { loadState } from "./storage";

export function renderHeader() {
    const header = document.querySelector('#header');
    header.innerHTML = `
        <nav>
            <a href="#/">home</a>
            <a href="#/settings">Settings</a>
            <a href="#/battle">Battle</a>
            <a href="#/ship">Ship</a>
            <a href="#/registration">Registration</a>
        </nav>
    `;
}