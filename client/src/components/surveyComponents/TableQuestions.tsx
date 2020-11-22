import React from 'react';

import RowRadios from './RowRadios';

import '../../css/surveyComponents/TableQuestions.css';
import { FixMeLater } from '../../constants/Utilities';

// Possible values
const rowOptions = [1, 2, 3, 4];

// Styles
const containerStyle = {
  container: {
    // padding: "2%",
    margin: '2%',
    borderRadius: 20,
    shadow: 100,
    background: 'white',
  },
};

const TableQuestions = (props: FixMeLater) => {
  let columns: string[];
  if (props.language === 'en') {
    columns = ['Beginner', 'Intermediate', 'Competent', 'Proficient'];
  } else if (props.language === 'es') {
    columns = ['Principiante', 'Intermedia', 'Competente', 'Experta'];
  } else if (props.language === 'pt') {
    columns = ['Principiante', 'Intermediária', 'Competente', 'Especialista'];
  }

  return (
    <div
      className={props.error ? 'error-box' : 'to-hover'}
      style={{ ...containerStyle.container, padding: '2%', marginLeft: '2%' }}
    >
      <div style={{ fontWeight: 'bold' }}>{props.title}</div>
      <div className="description">{props.description}</div>
      {props.optionList.map((value: FixMeLater, index: number) => {
        return (
          <div>
            <RowRadios
              optionList={index === 0 ? columns : rowOptions}
              label={value}
              index={index}
              style={{
                ...containerStyle,
              }}
              value={props.value}
              onChange={props.onChange}
            />
          </div>
        );
      })}
      {props.error && (
        <div
          style={{
            color: 'red',
            fontSize: 16,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};

export default TableQuestions;
