import './styles';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getElectionByUser, getVotesByElection } from '../../actions';

export function Results(props: any): React.ReactElement {
  const userID = '5ea61c2d5cc527811592873a';
  const {
    election: { title, polls },
    votes,
  } = props;

  useEffect(() => {
    if (props.election._id) props.getElectionVotes(props.election._id);
    else props.getUserElection(userID);
  }, [props.election._id]);

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
    </div>
  );
}

const mapDispatch = {
  getElectionVotes: getVotesByElection,
  getUserElection: getElectionByUser,
};

const mapStates = (props: any): any => props;

export default connect(mapStates, mapDispatch)(Results);
