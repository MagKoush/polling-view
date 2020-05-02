import './styles';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { getElectionByUser, goToPage, postVotes } from '../../actions';
import Poll from '../Poll';

interface Props {
  getUserElection: Function;
  submitUserElection: Function;
  goToPage: Function;
  user: any;
  election: any;
}

export function Election(props: Props): React.ReactElement {
  const { register, handleSubmit } = useForm();
  const userID = '5ea61c2d5cc527811592873a';

  useEffect(() => {
    props.getUserElection(userID);
  }, []);

  const onSubmit = (polls: any): void => {
    props.submitUserElection(userID, props.election._id, polls);
  };

  const polls = props.election.polls.map(({ _id, text, options, type }: any, index: string) => (
    <Poll _id={_id} index={index} key={_id} options={options} text={text} formRegister={register} type={type} />
  ));

  return (
    <div className="election">
      <h2>{props.election.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {polls}
        <input type="submit" value="Send Form" />
        <input type="reset" value="Clear Form" />
      </form>
    </div>
  );
}

const mapDispatch = {
  getUserElection: getElectionByUser,
  goToPage: goToPage,
  submitUserElection: postVotes,
};

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(Election);
