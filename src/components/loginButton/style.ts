import styled from 'styled-components'

export const LoginContent = styled.div`
  position: fixed;
  top: 35px;
  right: 40px;
  width: 110px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  @media screen and (min-width: 380px) {
    :hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media screen and (max-width: 760px) {
    position: relative;
    top: 0;
    right: 0;
  }
`

export const LoginText = styled.span`
  color: #fff;
  font-size: 16px;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`

export const LoggedContent = styled.div`
  position: fixed;
  top: 35px;
  right: 40px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 30px;
  margin-bottom: 20px;
  display: grid;
  place-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  @media screen and (min-width: 380px) {
    :hover {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
  @media screen and (max-width: 760px) {
    position: relative;
    top: 0;
    right: 0;
  }
`
