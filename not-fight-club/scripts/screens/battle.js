// рисует бой, зовёт combat, пишет лог

// Так как при каждом шаге мы сохраняли 
// state.currentBattle в localStorage, 
// допиши в screens/battle.js логику инициализации: 
// если при загрузке экрана в state уже есть 
// активный бой (HP > 0), экран не должен 
// сбрасывать его. Он должен сразу отобразить 
// текущее здоровье кораблей и вывести накопленный массив логов на экран.
// 

export function renderBattle(container) {
    const div = document.createElement('div');
    div.innerHTML = "<h1>Battle</h1>";
    container.append(div);
}