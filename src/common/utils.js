/**
 * Used for triggering an action whenever any part of an observed element reaches the center of
 * the viewport.
 *
 * @param {Function} action Invoked when an observed element reaches the threshold.
 * @param {Array} args Arguments that are passed to the action.
 * @returns {IntersectionObserver}
 */
function createIntersectionObserver(action, args) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          action(...args);
        }
      });
    },
    { rootMargin: '-50% 0% -50% 0%' }
  );

  return observer;
}

// eslint-disable-next-line import/prefer-default-export
export { createIntersectionObserver };
