import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container
      component="main"
      sx={{
        width: '100wv',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box mb={10}>
        <Typography
          component="h1"
          variant="h4"
          fontWeight="600"
          textAlign="center"
        >
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일 입력"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 3, height: 40 }}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Grid
              item
              xs
              container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography variant="body2" mr={1}>
                계정이 없으신가요?
              </Typography>
              <Link href="#" variant="body2">
                회원가입
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
