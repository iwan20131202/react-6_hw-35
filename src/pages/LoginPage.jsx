import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Вхід до облікового запису</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', gap: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Пошта
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Пароль
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Увійти</button>
      </form>
    </div>
  );
};

export default LoginPage;
