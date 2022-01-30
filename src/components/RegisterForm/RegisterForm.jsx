import { useState } from 'react';
import style from './RegisterForm.module.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = event => {
    event.preventDefault();
    const user = { name, email, password };
    console.log(user);

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className={style.registrationForm} onSubmit={formSubmit}>
      <div className={style.inputWrapper}>
        <label className={style.nameTitle}>
          <span>Name</span>
          <input
            className={style.nameField}
            type="text"
            name="name"
            value={name}
            required
            onChange={event => setName(event.target.value)}
          />
        </label>
      </div>

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
        Registration
      </button>
    </form>
  );
}
