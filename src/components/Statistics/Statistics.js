export const Statistics = ({ good, neutral, bad, total, positiveFeetback }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feetback: {positiveFeetback}%</p>
    </div>
  );
};
