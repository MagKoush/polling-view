import './styles';

import * as EmailValidator from 'email-validator';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { getUserByEmail, goToPage } from '../../actions';

interface Props {
  goToPage: Function;
  getUser: Function;
}

export function SignIn({ goToPage, getUser }: Props): React.ReactElement {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });
  const onSubmit = ({ email }: any): void => {
    goToPage('ELECTION');
    getUser(email);
  };

  const diaplayInputErrorMessage = (): string => {
    let errMsg = '';

    if (errors.email) {
      switch (errors.email.type) {
        case 'required':
          errMsg = 'Email is required';
          break;
        case 'valid':
          errMsg = 'Email is not valid';
          break;
      }
    }

    return errMsg;
  };

  return (
    <div className="signin">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          ref={register({
            required: true,
            validate: { valid: (value): any => EmailValidator.validate(value) },
          })}
        />
        {diaplayInputErrorMessage()}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

const mapDispatch = {
  getUser: getUserByEmail,
  goToPage: goToPage,
};

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(SignIn);
