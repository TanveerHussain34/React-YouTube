import { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-xl flex flex-col xs:flex-row ${className}`}
    >
      <div className="w-full xs:w-1/2">
        <label
          htmlFor={amountInputId}
          className="block text-black/50 mb-2 w-full text-center xs:text-left"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 px-1.5 text-left border border-gray-300 rounded-lg xs:border-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-full xs:w-1/2 flex flex-wrap justify-center xs:justify-end text-center xs:text-right">
        <p className="text-black/50 mb-2 w-full text-lg xs:text-md">
          Currency Type
        </p>
        <select
          className="w-full xs:w-1/2 rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// Add propTypes to validate props
InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectedCurrency: PropTypes.string,
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  className: PropTypes.string,
};

// Add defaultProps for optional props
InputBox.defaultProps = {
  currencyOptions: [],
  selectedCurrency: "usd",
  amountDisabled: false,
  currencyDisabled: false,
  className: "",
};

export default InputBox;
