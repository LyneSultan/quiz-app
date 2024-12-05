import Button from '@mui/material/Button';
import './style.css';
export const ButtonComponent = ({ text, onClick }) => {
  return (
    <Button variant="contained" className='button-primary' onClick={onClick}>
      {text}
    </Button>
  );
};

