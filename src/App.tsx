import { useReducer } from "react";
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora De Propinas Y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> {/* MediaQueries para 768px */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10"> {/* Le agregamos espacio desde el padre hacia los hijos */}
            {menuItems.map(item => (
              <MenuItem /* Abrimos Componente */
                key={item.id}
                item={item}
                dispatch={dispatch}
              /> /* Cerramos Componente */
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {state.order.length ? ( /* Si es mayor a cero mostrsms el formulario... */
              <>
                <OrderContents
                  order={state.order}
                  dispatch={dispatch}
                />
      
                <TipPercentageForm 
                  dispatch={dispatch}
                  tip={state.tip}
                />
      
                <OrderTotals 
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
            ) : ( /* Si no tiene nada entonces no mostramos el formulario... */
              <p className="text-center ">La orden esta vacia</p>
            )}


        </div>
      </main>
    </>
  )
}

export default App
