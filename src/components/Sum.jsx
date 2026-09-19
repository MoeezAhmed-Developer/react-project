function Sum() {
  const x = 170;
  const y = 40;
   const total = `the total value is ${y + y}`;

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "25px",
        textAlign: "center",
        borderRadius: "12px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Sum: {x + y}</h1>
      <h2>Difference: {x - y}</h2>
      <h3>Division: {x / y}</h3>
      <h4>Multiplication: {x * y}</h4>

      <button
        onClick={() => alert(total)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#222",
          color: "#fff",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Sum;
