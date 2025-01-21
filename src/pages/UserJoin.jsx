import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const UserJoin = () => {
  const theme = createTheme();

  // 상태 관리
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
    nickname: '',
    phone: '',
    birthDate: '',
    gender: '',
  });
  const [checked, setChecked] = useState(false);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 동의 체크
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  // form 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked) {
      alert('약관에 동의해주세요.');
      return;
    }

    if (formData.password !== formData.rePassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/users/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('회원가입 성공!');
        console.log('Response:', result);
      } else {
        const error = await response.json();
        alert('회원가입 실패: ' + error.message);
        console.error('Error:', error);
      }
    } catch (err) {
      console.error('Network Error:', err);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  //form 렌더링
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="email"
                  id="email"
                  name="email"
                  label="이메일 주소"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  name="password"
                  label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  label="비밀번호 재입력"
                  value={formData.rePassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="name"
                  label="이름"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  name="nickname"
                  label="닉네임"
                  value={formData.nickname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  name="phone"
                  label="전화번호"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="birthDate"
                  name="birthDate"
                  label="생년월일"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  name="gender"
                  label="성별"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onChange={handleAgree} color="primary" />}
                  label="회원가입 약관에 동의합니다."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserJoin;

