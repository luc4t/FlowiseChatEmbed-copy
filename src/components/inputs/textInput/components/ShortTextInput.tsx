import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ShortTextInputProps = {
  ref: HTMLInputElement | undefined;
  onInput: (value: string) => void;
  fontSize?: number;
  disabled?: boolean;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

const getFontSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 700) {
    return '13px';
  } else {
    return '15px';
  }
};

export const ShortTextInput = (props: ShortTextInputProps) => {
  const [local, others] = splitProps(props, ['ref', 'onInput']);
  const fontSize = getFontSize();

  return (
    <input
      ref={props.ref}
      class="focus:outline-none bg-transparent px-2 py-3 flex-1 w-full text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
      type="text"
      disabled={props.disabled}
      style={{ 'font-size': props.fontSize ? `${props.fontSize}px` : fontSize }}
      onInput={(e) => local.onInput(e.currentTarget.value)}
      {...others}
    />
  );
};
