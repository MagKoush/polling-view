import './styles';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { authenticateUser, goToPage } from '../../actions';
import { User } from '../../interfaces';

interface Props {
  authenticateUser: Function;
  goToPage: Function;
  user: User;
}

export function SignIn({ authenticateUser }: Props): React.ReactElement {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });
  const onSubmit = ({ username, password }: any): void => {
    authenticateUser(username, password);
  };

  return (
    <div className="signin">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={register({
            required: true,
          })}
        />
        {errors.username && 'username is required'}
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({
            required: true,
          })}
        />
        {errors.password && 'password is required'}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

const mapDispatch = {
  authenticateUser: authenticateUser,
  goToPage: goToPage,
};

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(SignIn);
