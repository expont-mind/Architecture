export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 60; // Approximate header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
