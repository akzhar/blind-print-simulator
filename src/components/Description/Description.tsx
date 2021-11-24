import React from 'react';

import { API_URL } from '@consts/const';

const Description: React.FC = () => (
  <>
    <h2>Описание функционала</h2>
    <ul>
      <li>получение текста для печати через <a href={API_URL} rel="noreferrer" target="_blank">публичное API</a></li>
      <li>отображение набираемого текста в реальном времени</li>
      <li>реакция на ввод неверных символов</li>
      <li>подсчет и отображение скорости печати</li>
      <li>подсчет и отображение точности вводимой информации</li>
    </ul>
  </>
);

export default Description;
