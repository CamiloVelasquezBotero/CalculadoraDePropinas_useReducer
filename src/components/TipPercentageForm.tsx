import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPorcentageFormProps = {
  dispatch: React.ActionDispatch<[action: OrderActions]>,
  tip: number
}

export default function TipPercentageForm({dispatch, tip}: TipPorcentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => dispatch({type: 'add-tip', payload: {value: +e.target.value}} )} /* le ponemos (+) para que lo convierta a (numebr) por el type y no marque error */
                        checked={tipOption.value === tip} /* En caso de que sean iguales, se habilitad el check */
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
