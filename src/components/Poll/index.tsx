import './styles';

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

interface Props {
  index: string;
  text: string;
  options: Array<string>;
}

export default function Poll({ index, text, options }: Props): React.ReactElement {
  const choices = options.map((option, index) => (
    <Fragment key={index}>
      <input type="radio" name={text} id={option} value={option} />
      <label htmlFor={option}>{option}</label>
    </Fragment>
  ));

  return (
    <div className="poll">
      <h4>
        {index + 1}. {text}
      </h4>
      <div className="choices">{choices}</div>
    </div>
  );
}
