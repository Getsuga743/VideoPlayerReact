import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { registerRequest } from '../../actions/index';

import '../../assets/styles/LoginForm.scss';

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({ email: '', password1: '', password2: '' });
  const handleInputOnChange = (e) => (setFormValues({ ...formValues, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(formValues);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Register</h2>
        <form className='login__container--form' action='submit' onSubmit={handleSubmit}>
          <input
            className='input'
            name='email'
            placeholder='Correo'
            type='email'
            onChange={handleInputOnChange}
          />
          <input
            className='input'
            name='password1'
            placeholder='Contraseña'
            type='password1'
            onChange={handleInputOnChange}
          />
          <input
            className='input'
            name='password2'
            placeholder='Contraseña'
            type='password2'
            onChange={handleInputOnChange}
          />
          <button type='submit' className='button'>Registrarse</button>
        </form>
        <p className='login__container--register'>
          Tienes cuenta ?
          {' '}
          <Link to='/login' className='login__change-status-button'>Ingresar</Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));
