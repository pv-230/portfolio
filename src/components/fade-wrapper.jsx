import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFadeWrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? '100%' : '0%')};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-10vw)')};
  transition: opacity 0.5s, transform 0.5s;
`;

//-------------------------------------------------------------------------------------------------

function FadeWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  /**
   * Fades in the component's children when they enter at least 15% of the viewport height.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '-15% 0% -15% 0%' }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <StyledFadeWrapper ref={ref} isVisible={isVisible}>
      {children}
    </StyledFadeWrapper>
  );
}

FadeWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FadeWrapper;
