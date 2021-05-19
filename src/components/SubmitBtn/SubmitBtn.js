import "./SubmitBtn.css";

function SubmitBtn({ text }) {
  return <input
  className="submit-button"
  value={text}
  type="submit" />;
}

export default SubmitBtn;
