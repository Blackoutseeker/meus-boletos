import styled from 'styled-components'

export const ItemContent = styled.div`
  max-width: 800px;
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
`

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const TitleContent = styled.div`
  width: 640px;
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
  height: 30%;
`

export const TitleText = styled.span`
  color: #fff;
  font-size: 22px;
  white-space: nowrap;
`

export const ValidityText = styled.span`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 16px;
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
  :hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`

export const DeleteButton = styled(Button)`
  width: 90px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`
