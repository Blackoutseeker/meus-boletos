import styled, { css } from 'styled-components'

const dragActive = css`
  border-color: ${({ theme }) => theme.colors.green};
`

export const AddModalContent = styled.div`
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

export const AddText = styled.span`
  color: #fff;
  font-size: 26px;
`

export const Input = styled.input`
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

export const HideInput = styled.input`
  display: none;
`

export const FileInput = styled(Input)`
  cursor: default;
  border-style: dashed;
  border: 3px dashed ${({ theme }) => theme.colors.greyText};
  ${(props: { isDragActive: boolean }) => props.isDragActive && dragActive}
`

export const ButtonContent = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const AddButton = styled.button`
  outline: none;
  border: none;
  width: 180px;
  height: 50px;
  background-color: transparent;
  display: grid;
  place-items: center;
  border: 3px solid ${({ theme }) => theme.colors.green};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`

export const AddButtonText = styled.span`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`
