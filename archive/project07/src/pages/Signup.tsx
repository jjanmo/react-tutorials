import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { LockKeyholeIcon } from 'lucide-react'

export default function Signup() {
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
      }}
    >
      <Box
        sx={{
          width: '480px',
          mt: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LockKeyholeIcon size={64} strokeWidth={1} />
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mt: 2,
            textAlign: 'center',
          }}
        >
          회원가입
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            name="id"
            label="아이디"
            placeholder="아이디를 입력해주세요"
            autoComplete="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            name="password1"
            id="password1"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            name="password2"
            id="password2"
            label="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            autoComplete="email"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 3, height: 40, fontSize: 16 }}
          >
            회원가입
          </Button>
          <Grid container>
            <Grid item xs container justifyContent={'center'}>
              <Typography variant="body2" mr={1}>
                이미 계정이 있으신가요?
              </Typography>
              <Link href="#" variant="body2">
                로그인
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
