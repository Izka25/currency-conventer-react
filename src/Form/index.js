import { useState } from "react";
import currencies from "../currencies";
import { Legend, Label, Button, Input, Select, Stopka } from "./styled";

const Form = ({ calculateResult, }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <Legend>Kalkulator walutowy</Legend>
        <p>
          <Label>
            Kwota w zł*:
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              placeholder="Wpisz kwotę w zł"
              name="cash"
              step="1"
              min="1"
              autoFocus
              required
            />
          </Label>
        </p>
        <p>
          <Label>
            Waluta:
            <Select
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
            </Select>
          </Label>
        </p>
        <p>
          <Button>Przelicz walutę!</Button>
        </p>

        <Stopka>
          Kursy pochodzą ze strony nbp.pl z Tabeli nr 019/A/NBP/2022 z dnia
          2022-01-28
        </Stopka>
      </fieldset>
    </form>
  );
};

export default Form;
