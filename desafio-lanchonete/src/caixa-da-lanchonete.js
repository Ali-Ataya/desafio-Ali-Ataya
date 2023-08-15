class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            'cafe': { descricao: 'Café', valor: 3.00 },
            'chantily': { descricao: 'Chantily (extra do Café)', valor: 1.50 },
            'suco': { descricao: 'Suco Natural', valor: 6.20 },
            'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
            'queijo': { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            'salgado': { descricao: 'Salgado', valor: 7.25 },
            'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        };
        
        const taxaCredito = 0.03;
        const descontoDinheiro = 0.05;

        let valorTotal = 0;

        let temItemPrincipal = false;

        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(',');

            if (cardapio[codigo]) {
                const item = cardapio[codigo];
                valorTotal += item.valor * parseInt(quantidade);
                
                if (!temItemPrincipal && !codigo.startsWith('chantily') && !codigo.startsWith('queijo')) {
                    temItemPrincipal = true;
                }
            } else {
                return "Item inválido!";
            }
        }

        if (!temItemPrincipal) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= (1 - descontoDinheiro);
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= (1 + taxaCredito);
        } else if (metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!";
        }

        return `R$ ${valorTotal.toFixed(2)}`;
    }
}

export { CaixaDaLanchonete };
