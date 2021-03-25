import styled from 'styled-components'

export const LoginModalContent = styled.div`
  min-width: 550px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 630px) {
    min-width: 380px;
    margin: 20px;
  }
  @media screen and (max-width: 460px) {
    min-width: 100px;
    margin: 20px;
  }
`

export const LoginText = styled.span`
  color: #fff;
  font-size: 26px;
`

export const TextInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 22px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.greyText};
  }
`

export const ButtonContent = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  width: 180px;
  height: 50px;
  background-color: transparent;
  display: grid;
  place-items: center;
  border: 3px solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`

export const LoginButtonText = styled.span`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`
