export default function Input({ children, onChange, field }) {
  const key = Object.keys(field)[0];

  function handleChange(ev) {
    const newValue = Number.parseFloat(ev.target.value);
    if (newValue < 0) {
      alert("Number must positive");
    } else {
      onChange(key, newValue);
    }
  }

  return (
    <p>
      <label>
        {children}
        <input type="number" value={field[key]} onChange={handleChange} />
      </label>
    </p>
  );
}
