import './styles';

import React, { Fragment } from 'react';

import { PollType } from '../../interfaces';

/**
 * @private
 *
 * @interface PollPropertyTypes  Poll component's property types
 *
 * @property {string} _id              - Unique ID
 * @property {number} index            - Poll index
 * @property {string} text             - Poll text
 * @property {Array<string>} options   - Poll's offered options
 * @property {any} formRegister        - Form's reference
 * @property {string} type             - Poll's type
 */
interface Props {
  _id: string;
  index: number;
  text: string;
  options: Array<string>;
  formRegister: any;
  type: string;
}

/**
 * @public
 *
 * Poll Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Poll React component
 */
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
