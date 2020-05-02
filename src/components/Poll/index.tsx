import './styles';

import React, { Fragment } from 'react';

import { PollType } from '../../interfaces';

interface Props {
  _id: string;
  index: string;
  text: string;
  options: Array<string>;
  formRegister: any;
  type: string;
}

export default function Poll({ _id, index, text, options, formRegister, type }: Props): React.ReactElement {
  const pollType = type === PollType.MS ? 'checkbox' : 'radio';
  const choices = options.map((option, index) => (
    <Fragment key={index}>
      <input
        type={pollType}
        name={_id}
        id={option}
        value={option}
        ref={formRegister}
        required={type === PollType.MS ? false : true}
      />
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
