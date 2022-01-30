import { useState } from 'react';
import style from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = event => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);

    setEmail('');
    setPassword('');
  };

  return (
    <form className={style.loginForm} onSubmit={formSubmit}>
      <div className={style.inputWrapper}>
        <label className={style.emailTitle}>
          <span>Email</span>
          <input
            className={style.emailField}
            type="email"
            name="email"
            value={email}
            required
            onChange={event => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div className={style.inputWrapper}>
        <label className={style.passwordTitle}>
          <span>Password</span>
          <input
            className={style.passwordField}
            type="password"
            name="password"
            value={password}
            required
            onChange={event => setPassword(event.target.value)}
          />
        </label>
      </div>
      <button className={style.submitBtn} type="submit">
        Login
      </button>
    </form>
  );
}
