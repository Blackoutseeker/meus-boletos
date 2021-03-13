import styled from 'styled-components'

export const ActionButton = styled.button`
  position: fixed;
  right: 40px;
  bottom: 20px;
  outline: none;
  border: none;
  width: 55px;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  place-items: center;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`
