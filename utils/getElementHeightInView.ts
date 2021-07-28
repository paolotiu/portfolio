export const getElementHeightInView = (element: HTMLElement) => {
  const heightInView = window.innerHeight - element.getBoundingClientRect().top;

  // Prevent returning negatives
  return heightInView > 0 ? heightInView : 0;
};
