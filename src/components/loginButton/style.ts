import styled from 'styled-components'

export const LoginContent = styled.div`
  position: fixed;
  top: 35px;
  right: 40px;
  width: 110px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`

export const LoginText = styled.span`
  color: #fff;
  font-size: 16px;
`

export const LoggedContent = styled.div`
  position: fixed;
  top: 35px;
  right: 40px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 30px;
  display: grid;
  place-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`
