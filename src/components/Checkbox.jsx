const Checkbox = ({ title, state, onChange }) => {
  return (
    <div>
      <input onChange={onChange} type="checkbox" checked={state} />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
