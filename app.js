'use strict'
const nomeProduto = 'brasa bacon';
const precoBase = 31.90;
const precoAdicional = 4;
const quantidade = 2; 
const taxaEntrega = 7;

const valorUnitario = precoBase + precoAdicional;
const subtotal = valorUnitario * quantidade;
const total = subtotal + taxaEntrega;

console. log(`produto: ${nomeProduto}`);
console. log(`Quantidade: ${quantidade}`);
console. log(`Total previsto: ${total}`);
function finalizarCompra() {
    
}