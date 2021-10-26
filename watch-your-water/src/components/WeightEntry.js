const WeightEntry = (props) => (
    <div className="weight-entry">
        <h1>Please Enter Your Weight</h1>
        <div>
            <button onClick={props.onClick}>&lt;</button>
            <input type="text">100</input>
            <button onClick={props.onCancel}>&gt;</button>
        </div>
    </div>
);

export default WeightEntry;