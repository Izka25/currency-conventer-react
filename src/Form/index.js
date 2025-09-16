import "./style.css";

const Form = () => (
  <form className="form">
    <fielset>
      <legend className="legend">Kalkulator walutowy</legend>
      <p>
        <label className="label">
          Kwota:{" "}
          <input
            className="cash"
            type="number"
            placeholder="Kwota"
            name="cash"
            step="1"
            min="1"
            autofocus
            required
          />
        </label>
      </p>
      <p>
        <label className="label">
          Waluta:{" "}
          <input
            className="currency"
            type="tekst"
            name="currency"
            placeholder="Wybór waluty"
            list="currency"
          />
          <datalist id="currency" />
          <option value="eur">EUR-Euro</option>
          <option value="aud">AUD-Dolar australijski</option>
          <option value="gbp">GBP-Funt brytyjski</option>
          <option value="jpy">JPY-Jen japoński</option>
          <option value="chf">CHF-Frank szwajcarski</option>
          <option value="usd">USD-Dolar amerykański</option>
          <option value="hkd">HKD-Dolar hongkongu</option>
          <option value="cad">CAD-Dolar kanadyjski</option>
          <option value="nzd">NZD-Dolar Nowozelandzki</option>
          <option value="sgd">SGD-Dolar Singapurski</option>
        </label>
      </p>

      <p>
        <button className="submit button">Przelicz walutę!</button>
      </p>

      <p className="label">
        Wychodzi:<strong className="result">N/A</strong>
      </p>
    </fielset>
  </form>
);

export default Form;
