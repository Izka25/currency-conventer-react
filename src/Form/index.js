import { useState } from "react";
import { Legend, Label, Button, Input, Select, Stopka, Loading, Failure, } from "./styled";
import { useRatesData } from "./Result/useRatesData";
import Result from "./Result";

export const Form = () => {
const [result, setResult] = useState();
const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("PLN");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <Legend>Kalkulator walutowy</Legend>
        {ratesData.state === "loading"
        ? (
          <Loading>
            Sekundeczka..., Ładuje kursy walut dla Ciebie.
          </Loading>
        )
        : 
        ratesData.state === "error" ? (
          <Failure>
            Coś poszło nie tak..., sprawdź czy masz połączenie z internetem, jeśli tak, odśwież i spróbuj jeszcze raz, jeśli się znów nie uda, poczekaj z minutkę i spróbuj ponownie.
          </Failure>
        ) : (
          <>
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
              {Object.keys(ratesData.rates).map(((currency) => (
                <option 
                key={currency} 
                value={currency}
                >
                  {currency}
                </option>
              )))}
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
        
        <Result result={result}/>
        
      </>
     
            )}
            </fieldset>
    </form>
  );
};

