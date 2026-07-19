export function saveState(state) {
    localStorage.setItem('nfc_state', JSON.stringify(state));
}

export function loadState() {
    const stateJSON = localStorage.getItem('nfc_state');
    return stateJSON ? JSON.parse(stateJSON) : null;
}