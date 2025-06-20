import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    dispatch: React.ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({item, dispatch} : MenuItemProps) { /* Le aplicamos destructuring directamente a los props */
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 cursor-pointer w-full p-3 rounded-lg flex justify-between"
        onClick={() => dispatch({type: 'add-item', payload: {item}})} /* payload: {item: item} */
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
