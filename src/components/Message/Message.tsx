import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from '@store/reducer';

const Message: React.FC = () => {

  const isVisible: boolean = useSelector((state: TState) => Boolean(state.message.isVisible));
  const isWarning: boolean = useSelector((state: TState) => state.message.isWarning);
  const label: string = useSelector((state: TState) => state.message.label);
  const text: string = useSelector((state: TState) => state.message.text);

  return (
    <>
      {
        isVisible &&
        <div className={isWarning ? 'message message--warning' : 'message'}>
          <b>{`${label}`}</b> {text}
        </div>
      }
    </>
  )
}

  export default Message;
