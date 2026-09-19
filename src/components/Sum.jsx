function Sum() {
  const x = 170;
  const y = 40;

  return (
    <div>
      <h1>{x + y}</h1>
      <h2>{x - y}</h2>
      <h3>{x / y}</h3>
      <h4>{x * y}</h4>
      <button onClick={() => console.log(y + y)}>click</button>
    </div>
  );
}

export default Sum;
