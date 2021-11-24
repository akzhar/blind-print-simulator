import React from 'react';
import { useDispatch } from 'react-redux';

import Message from '@components/Message';
import ActionCreator from '@store/actions';

const NotFoundPage: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.set404WarningMessage());
  });

  return <Message />
};

export default NotFoundPage;
