const Input = ({value, place, type}) => {
  return (
    <>
      <input type={type} placeholder={place} value={value}></input>
    </>
  );
};
export default Input;