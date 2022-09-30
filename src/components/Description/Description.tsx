import React from 'react';

import { API_URL } from '@consts/const';

const Description: React.FC = () => (
  <>
  <h2>Description</h2>
  <ul>
    <li>getting text to type via <a href={API_URL} rel="noreferrer" target="_blank">public API</a> (RU texts only)</li>
    <li>display of the typed text in real time</li>
    <li>reaction to entering incorrect characters</li>
    <li>calculation of typing speed</li>
    <li>calculation of the accuracy of the typing</li>
  </ul>
  </>
);

export default Description;
