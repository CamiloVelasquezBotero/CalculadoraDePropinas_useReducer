import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    { type: 'add-item', payload: {item: MenuItem} } |
    { type: 'remove-item', payload: {id: MenuItem['id']} } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: {value: number} }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState:OrderState = {
    order: [],
    tip: 0
}
export const orderReducer = (state:OrderState = initialState, action:OrderActions) => {
    
    if(action.type === 'add-item') {
        let updatedOrder = []
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id);
        if(itemExists) {
            updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id 
                ? {...orderItem, quantity:orderItem.quantity+1}  /* Si lo encuentra le sumamos 1 al quantity */
                : orderItem /* Si no retornamos los que ya existen */
            )
        } else {
            const newItem = {...action.payload.item, quantity: 1} /* Creamos un nuevo item con la cantidad para que sea de type (OrderItem) */
            updatedOrder = [...state.order, newItem]
        }
        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type === 'remove-item') {
        const orderUpdated = state.order.filter(item => item.id !== action.payload.id) /* Filtramos todos menos el que nos paso por el id */
        return {
            ...state,
            order: orderUpdated
        }
    }

    if(action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tio: []
        }
    }

    if(action.type === 'add-tip') {
        return {
            ...state,
            tip: action.payload.value
        }
    }

    return state
}
