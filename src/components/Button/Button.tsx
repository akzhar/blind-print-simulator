import React from 'react';

type TButtonProps = {
  text: string,
  buttonClickHandler?: () => void,
  isAnimate?: boolean
}

const Button: React.FC<TButtonProps> = ({ text, buttonClickHandler, isAnimate = false}: TButtonProps) => (
  <button
    className={isAnimate ? 'button button--animate' : 'button'}
    onClick={buttonClickHandler}
  >
      {text}
  </button>
);

export default Button;
