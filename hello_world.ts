// tipagem no TypeScript

// tipagem implicita
let username = 'the_pink_dread' // tipo string, mas não declarado explicitamente no código
                                // no Ts não podemos atribuir a uma variavel de um tipo, um valor de outro tipo.

// Tipagem explicita 
const pi: number = 3.14159265359 // indicamos o tipo do valor com ":'tipo'"
let logado: boolean = true
let rg: number|string|boolean = 12345678946
