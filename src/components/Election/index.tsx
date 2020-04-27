import './styles';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { fetchPolls } from '../../actions';
import Poll from '../Poll';

interface Props {
  fetchUserPolls: Function;
  goToPage: Function;
  user: any;
}

export function Election(props: Props): React.ReactElement {
  useEffect(() => {
    props.fetchUserPolls('arash.koush@gmail.com');
  }, []);

  const polls = props.user.polls.map(({ text, options }: any, index: string) => (
    <Poll index={index} key={index} options={options} text={text} />
  ));

  return (
    <div className="election">
      <h2>My Election</h2>
      <form>
        {polls}
        <input type="submit" value="Send Form" />
        <input type="reset" value="Clear Form" />
      </form>
    </div>
  );
}

const mapDispatch = (dispatch: Function): any => ({
  fetchUserPolls: (email: string): any => dispatch(fetchPolls(email)),
  goToPage: (type: string): any => dispatch({ type }),
});

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(Election);
