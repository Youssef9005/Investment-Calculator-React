export default function UserInput({userInput , onChange}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="input-1">
          Initial Investment
          <input type="number" id="input-1" value={userInput.initialInvestment} onChange={(event) => onChange("initialInvestment" , Number(event.target.value))} required/>
        </label>

        <label htmlFor="input-2">
          Annual Investment
          <input type="number" id="input-2" value={userInput.annualInvestment} onChange={(event) => onChange("annualInvestment" , Number(event.target.value))} required/>
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="input-3">
          Expected Return
          <input type="number" id="input-3"  value={userInput.expectedReturn} onChange={(event) => onChange("expectedReturn" , Number(event.target.value))} required/>
        </label>

        <label htmlFor="input-4">
          Duration
          <input type="number" id="input-4"  value={userInput.duration} onChange={(event) => onChange("duration" , Number(event.target.value))} required/>
        </label>
      </div>
    </div>
  );
}