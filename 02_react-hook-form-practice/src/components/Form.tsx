import { Container, TextField } from '@mui/material';
import CitySelector from './CitySelector';

const Form = () => {
  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <h1>User</h1>
      <form>
        <TextField label="Name" name="name" type="text" fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" fullWidth margin="normal" />

        <CitySelector />
      </form>
    </Container>
  );
};

export default Form;
