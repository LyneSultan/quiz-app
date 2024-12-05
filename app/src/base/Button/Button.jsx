import Button from '@mui/material/Button';

export const ButtonComponent = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

