import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type ShortTextInputProps = {
  ref: HTMLInputElement | undefined;
  onInput: (value: string) => void;
  fontSize?: number;
  mobileFontSize?: number;
  disabled?: boolean;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

export const ShortTextInput = (props: ShortTextInputProps) => {
  const [local, others] = splitProps(props, ['ref', 'onInput']);

  const isMobile = () => {
    return window.innerWidth <= 700;
  };

  const getFontSize = () => {
    if (isMobile() && props.mobileFontSize) {
      return `${props.mobileFontSize}px`;
    } else if (props.fontSize) {
      return `${props.fontSize}px`;
    } else {
      return '15px';
    }
  };

  return (
    <input
      ref={props.ref}
      class="focus:outline-none bg-transparent px-2 py-3 flex-1 w-full text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
      type="text"
      disabled={props.disabled}
      style={{ 'font-size': getFontSize() }}
      onInput={(e) => local.onInput(e.currentTarget.value)}
      {...others}
    />
  );
};

ShortTextInput.defaultProps = {
  mobileFontSize: 13,
};
