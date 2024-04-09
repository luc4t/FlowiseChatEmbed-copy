type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

const getFontSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 700) {
    return '12px';
  } else {
    return '14px';
  }
};

export const StarterPromptBubble = (props: Props) => {
  const fontSize = getFontSize();

  return (
    <>
      <div
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
        onClick={() => props.onPromptClick?.()}
      >
        <span
          class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
          data-testid="host-bubble"
          style={{
            width: 'max-content',
            'font-size': fontSize,
            'border-radius': '12px',
            cursor: 'pointer',
          }}
        >
          {props.prompt}
        </span>
      </div>
    </>
  );
};
