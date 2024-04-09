type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    target.style.display = 'none';
    props.onPromptClick?.();
  };

  return `
    <div
      data-modal-target="defaultModal" 
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style="width: max-content; font-size: 15px; border-radius: 15px; cursor: pointer;"
        onclick="(${handleClick})(event);"
      >
        ${props.prompt}
      </span>
    </div>
  `;
};
