import './styles';

import React, { Fragment } from 'react';

interface Props {
  _id: string;
  index: string;
  text: string;
  options: Array<string>;
  formRegister: any;
}

export default function Poll({ _id, index, text, options, formRegister }: Props): React.ReactElement {
  const choices = options.map((option, index) => (
    <Fragment key={index}>
      <input type="radio" name={_id} id={option} value={option} ref={formRegister} />
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
