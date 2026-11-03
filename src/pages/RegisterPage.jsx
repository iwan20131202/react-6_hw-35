import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Реєстрація нового користувача</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px', gap: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Ім'я
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Пошта
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Пароль
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={7} />
        </label>
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Зареєструватися</button>
      </form>
    </div>
  );
};

export default RegisterPage;
