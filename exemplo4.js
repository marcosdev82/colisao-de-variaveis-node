const config = { modo: "produção" };
config.modo = "desenvolvimento"; // Outro módulo pode sobrescrever isso

// Solução: Congele objetos imutáveis com Object.freeze.
const config = Object.freeze({ modo: "produção" });
