import './styles';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { getElectionByUser, goToPage, postVotes } from '../../actions';
import { Election as ElectionType, Poll as PollType, User } from '../../interfaces';
import Poll from '../Poll';

/**
 * @private
 *
 * @interface ElectionPropertyTypes  Election component's property types
 *
 * @property {Function} getUserElection     - Fetches user's election details
 * @property {Function} submitUserElection  - Submits votes
 * @property {Function} goToPage            - Redirects to targeted page
 * @property {User} user                    - User's details
 * @property {ElectionType} election        - Election's details
 */
interface Props {
  getUserElection: Function;
  submitUserElection: Function;
  goToPage: Function;
  user: User;
  election: ElectionType;
}

/**
 * @public
 *
 * Election Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Election React component
 */
export function Election(props: Props): React.ReactElement {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    props.getUserElection();
  }, []);

  const onSubmit = (polls: any): void => {
    props.submitUserElection(props.election._id, polls);
  };

  const polls = props.election.polls.map(({ _id, text, options, type }: PollType, index: number) => (
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
