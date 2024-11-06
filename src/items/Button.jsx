export default function Button({
  background = "linear-gradient(to right, purple, orange)",
  text = "Connect With Me",
  border = "none",
}) {
  const btnStyle = {
    background,
    border,
    padding: "8px 15px",
    borderRadius: "30px",
    cursor: "pointer",
    color: "white",
  };
  return (
    <div>
      <button style={btnStyle} type="submit">{text}</button>
    </div>
  );
}
