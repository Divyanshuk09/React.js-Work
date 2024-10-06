import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amoundDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputID = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label className='text-black/40 mb-2 inline-block' htmlFor={amountInputID} >{label}
        </label>
        <input className='outline-none w-full bg-transparent py-1.5'
          id='amountInputID'
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amoundDisable}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full"> Currency Type
        </p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // Ensures that the selected value is controlled
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          <option value="" disabled>Select</option> 
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
