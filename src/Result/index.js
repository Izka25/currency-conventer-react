import "./style.css";

const Result = ({ result }) => (
  <p className="label">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
    <Result result={result} />
  </p>
);

export default Result;
