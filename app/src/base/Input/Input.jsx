import TextField from '@mui/material/TextField';

const Input = ({ placeholder = "Enter text", handleInput }) => {
  return (
    <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text"
      placeholder={placeholder}
      onChange={handleInput} />)
}
export default Input;
