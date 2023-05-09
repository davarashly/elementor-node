import styled from "styled-components"

const StyledTable = styled.div`
  border: 1px solid var(--bs-gray-400);
  border-radius: 0.5rem;
  padding-inline: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 56px - 3rem);
  height: 100%;

  tbody tr {
    &:last-child {
      border: 0 transparent;
    }
  }

  &.info {
    tbody tr:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }

    & > div {
      overflow: auto;
      padding-inline: 1rem;
    }
  }
`

export default StyledTable
