type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => {
  let isVisible = true;

  const handleClick = () => {
    isVisible = false;
    props.onPromptClick?.();
    updateVisibility();
  };

  const updateVisibility = () => {
    const hostContainer = document.querySelector('.host-container') as HTMLElement;
    if (hostContainer) {
      hostContainer.style.display = isVisible ? 'flex' : 'none';
    }
  };

  const template = document.createElement('template');
  template.innerHTML = `
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style="width: max-content; font-size: 15px; border-radius: 15px; cursor: pointer;"
      >
        ${props.prompt}
      </span>
    </div>
  `;

  const hostContainer = template.content.querySelector('.host-container') as HTMLElement;
  hostContainer.addEventListener('click', handleClick);

  return template.content;
};
