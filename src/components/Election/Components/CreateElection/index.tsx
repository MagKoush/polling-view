import './styles';

import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { createElection } from '../../../../actions';
import { CreatePoll } from '../../../Poll/Components';

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
  createElection: Function;
}

/**
 * @public
 *
 * Election Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Election React component
 */
export function CreateElection(props: Props): React.ReactElement {
  const { register, control, handleSubmit, errors } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'polls' });
  const onSubmit = ({ polls, start, end, title }: any): void => {
    props.createElection({ end, polls: polls ? polls : [], start, title });
  };

  return (
    <div className="create-election">
      <h2>Create Election</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            ref={register({
              required: true,
            })}
          />
          {errors.title && 'title is required'}
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="start"
            ref={register({
              required: true,
            })}
          />
          {errors.start && 'Start date is required'}
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="end"
            ref={register({
              required: true,
            })}
          />
          {errors.end && 'End date is required'}
        </div>
        <ol>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <CreatePoll formRegister={register} item={item} index={index} remove={remove} />
                <button type="button" onClick={(): void => remove(index)}>
                  Delete Poll
                </button>
              </li>
            );
          })}
        </ol>
        <button
          onClick={(e): void => {
            e.preventDefault();
            append({});
          }}
        >
          Add Poll
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}

const mapDispatch = {
  createElection: createElection,
};

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(CreateElection);
