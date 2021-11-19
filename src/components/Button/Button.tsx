import React from 'react';

type TButtonProps = {
  text: string,
  buttonClickHandler?: () => void,
  isShaking?: boolean
}

const Button: React.FC<TButtonProps> = (props: TButtonProps) => (
  <button
    className={props.isShaking ? 'button button--shake' : 'button'}
    onClick={props.buttonClickHandler}
  >
      {props.text}
  </button>
);

export default Button;
