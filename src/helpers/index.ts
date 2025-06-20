export function formatCurrency(quantity: number) { /* Agrega el signo de la moneda especial */
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}