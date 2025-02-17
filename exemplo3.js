for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Saída inesperada: 3, 3, 3 (pois `var` não tem escopo de bloco)

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Saída correta: 0, 1, 2

