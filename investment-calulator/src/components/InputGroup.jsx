import Input from "./Input";

export default function UserInput({ labels, handleInputChange, sectionKey }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {labels.map(({ label, id }, idx) => (
          <p key={`${label}_${idx}`}>
            <label>{label}</label>
            <input
              type="number"
              onChange={(event) => handleInputChange(event, sectionKey, id)}
            />
          </p>
        ))}
      </div>
    </section>
  );
}
