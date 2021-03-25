import styled from 'styled-components'

export const ItemContent = styled.div`
  width: 60%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: calc(100% - 150px);
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const TitleContent = styled.div`
  width: 100%;
  height: 70%;
  display: inline-block;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
  ::-webkit-scrollbar-thumb {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.red};
  }
`

export const ValidityContent = styled.div`
  width: 100%;
  height: 40%;
  display: inline-block;
  overflow-y: hidden;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
  ::-webkit-scrollbar-thumb {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.red};
  }
`

export const TitleText = styled.span`
  color: #fff;
  font-size: 22px;
  white-space: nowrap;
`

export const ValidityText = styled.span`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 16px;
  white-space: nowrap;
`

export const Icons = styled.img`
  width: 25px;
  height: 25px;
`

const Button = styled.button`
  outline: none;
  border: none;
  height: 70px;
  display: grid;
  place-items: center;
  background-color: transparent;
  cursor: pointer;
`

export const DownloadContent = styled(Button)`
  width: 70px;
  @media screen and (min-width: 380px) {
    :hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`

export const DeleteButton = styled(Button)`
  width: 90px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media screen and (min-width: 380px) {
    :hover {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`
