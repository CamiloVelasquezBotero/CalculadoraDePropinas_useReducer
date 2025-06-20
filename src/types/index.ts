export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & { /* Hacemos un extends (heredar) */
    quantity: number
}