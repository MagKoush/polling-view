import './styles';

import React, { Fragment, useEffect, useState } from 'react';
import { FormContext, useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { connect } from 'react-redux';

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
interface Props {}

/**
 * @public
 *
 * Election Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Election React component
 */
export default function CreatePoll({ index, formRegister }: any): React.ReactElement {
  const { control } = useForm();
  const { fields, append } = useFieldArray({ control, name: `options` });
  const onClick = (e: any): void => {
    e.preventDefault();
    append({});
  };

  return (
    <div className="create-poll">
      <input ref={formRegister()} name={`polls[${index}.text]`} />
      <ul>
        {fields.map((item, i) => {
          return (
            <li key={item.id}>
              <input ref={formRegister()} name={`polls[${index}].options[${i}]`} />
            </li>
          );
        })}
      </ul>
      <button onClick={onClick}>Add Option</button>
    </div>
  );
}
