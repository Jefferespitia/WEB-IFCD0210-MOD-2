import { userInfo } from "node:os";

const user = process.argv[2] ?? 'amigo';
const nodeEnv = process.env.NODE_ENV ?? 'development';
const API_KEY = process.env.API_KEY 

console.log(`Hola ${user}, saludos de ${userInfo().username}`);
console.log(`Tu entorno de ejecución es ${nodeEnv}`);
console.log(`Tu API_KEY es ${API_KEY}`);
