// каждый экспортирует render(container)

export function renderRegistration(container) {
    const div = document.createElement('div');
    div.innerHTML = "<h1>Registration</h1>";
    container.append(div);
}