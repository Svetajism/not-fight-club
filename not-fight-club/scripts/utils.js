// randomFrom, shuffle, chance(percent)

// «Зоны не повторяются в пределах хода» 
// (внутри +25 за механику): randomFrom этого не гарантирует 
// — два вызова подряд могут вернуть одно и то же. 
// В utils.js нужна pickUnique(arr, n) 
// (перемешать копию, взять первые n)

export function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle(arr) {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function chance(percent) {
    return Math.random() < percent / 100;
}

export function pickUnique(arr, n) {
    const shuffled = shuffle(arr);
    return shuffled.slice(0, n);
}