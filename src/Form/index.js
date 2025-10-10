import { useState } from "react";
import "./style.css";
import currencies from "../currencies";

const Form = ({ calculateResult, }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <legend className="legend">Kalkulator walutowy</legend>
        <p>
          <label className="label">
            Kwota w zł*:
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="cash"
              type="number"
              placeholder="Wpisz kwotę w zł"
              name="cash"
              step="1"
              min="1"
              autoFocus
              required
            />
          </label>
        </p>
        <p>
          <label className="label">
            Waluta:
            <select
              className="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              type="tekst"
              name="currency"
              placeholder="Wybór waluty"
              list="currency"
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="submit button">Przelicz walutę!</button>
        </p>

        <p className="stopka">
          Kursy pochodzą ze strony nbp.pl z Tabeli nr 019/A/NBP/2022 z dnia
          2022-01-28
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
