import './styles';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getElectionByUser, getElectionParticipants, getVotesByElection, logOutUser } from '../../actions';
import { Election, Vote } from '../../interfaces';
import { election } from '../../reducers';

/**
 * @private
 *
 * @interface ResultPropertyTypes  Result component's property types
 *
 * @property {Election}    election          - Election's details
 * @property {Array<Vote>} votes             - Election's votes
 * @property {Function}    getUserElection   - Get user's Election's details
 * @property {Function}    getElectionVotes  - Get Election's vote's details
 * @property {Function}    logout            - Log User out
 */
interface Props {
  election: Election;
  votes: Array<Vote>;
  getUserElection: Function;
  getElectionParticipants: Function;
  getElectionVotes: Function;
  logout: () => {};
}

/**
 * @public
 *
 * Results Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Results React component
 */
export function Results({
  election: { _id, title, polls, participants },
  votes,
  getUserElection,
  getElectionParticipants,
  getElectionVotes,
  logout,
}: Props): React.ReactElement {
  useEffect(() => {
    // fetch election details if they are not stored
    if (!_id) {
      getUserElection();
    } else {
      // fetch Votes and Election's participants if elections are stored already
      getElectionVotes(_id);
      getElectionParticipants(_id);
    }
  }, [_id]);

  const memberRows = participants.map(({ _id, email, hasVoted }: any) => (
    <tr key={_id}>
      <td>{email}</td>
      <td>{hasVoted ? 'Yes' : 'No'}</td>
    </tr>
  ));

  const options = votes.map((vote: any) => {
    const [poll] = polls.filter((poll: any) => poll._id === vote._id);
    if (!poll) return;

    const votes = vote.results.map(({ option, vote }: any) => {
      return (
        <div className="result" key={option}>
          <h4>{option}:</h4> <h4>{vote}</h4>
        </div>
      );
    });

    return (
      <div key={vote._id}>
        <h3>{poll.text}</h3>
        {votes}
      </div>
    );
  });

  return (
    <div>
      <h1>{title} Results</h1>
      {options}
      <table>
        <thead>
          <tr>
            <th>{`Voter's Email`}</th>
            <th>Voted</th>
          </tr>
        </thead>
        <tbody>{memberRows}</tbody>
      </table>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

const mapDispatch = {
  getElectionParticipants: getElectionParticipants,
  getElectionVotes: getVotesByElection,
  getUserElection: getElectionByUser,
  logout: logOutUser,
};

const mapStates = (props: any): any => props;

export default connect(mapStates, mapDispatch)(Results);
