import styled from 'styled-components';

export const StyledApp = styled.div`
  /* height: 100vh;
  position: relative; */
  display: flex;
  align-items: center;
  height: 100vh;
  padding-top: 126px;

  > div {
    flex: 0 0 100%;
    width: 100%;
  }

  .slick-prev,
  .slick-next {
    background-color: #e2e8f0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    z-index: 1;
  }
  .slick-next {
    right: 2rem;
  }
  .slick-prev {
    left: 2rem;
  }
`;
