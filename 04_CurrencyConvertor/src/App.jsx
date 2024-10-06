import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmt, setConvertedAmt] = useState(0);
  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  const convert = () => {
    if (currencyData[to]) {
      setConvertedAmt(amount * currencyData[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/010/502/852/non_2x/light-and-dark-background-bitcoin-crypto-currency-illustration-for-page-logo-card-banner-web-and-printing-free-vector.jpg')`,
      }}
    >
      <div className="w-full">
      <p className='w-full max-w-md mx-auto  text-white text-center my-5 text-2xl'>Currency Convertor</p>
        
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={setAmount}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-800 "
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
