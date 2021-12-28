import styled from "styled-components";

export const StyledMetrics = styled.div`
  position: absolute;
  top: auto;
  right: 0.5rem;
  min-width: 7.5rem;
  z-index: 5;
  bottom: 1rem;

  .metric {
    white-space: nowrap;
    font-size: 0.75rem;
    margin-bottom: 0.375rem;

    &.title {
      font-weight: bold;
    }
  }
`;
