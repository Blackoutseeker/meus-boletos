import styled from 'styled-components'

export const CardContainer = styled.div`
  position: sticky;
  min-width: 200px;
  max-width: 200px;
  height: 270px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const CardLine = styled.hr`
  width: 100%;
  border: 1px solid #999;
  margin: 15px 0;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ProductContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`

export const PriceContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
  padding-right: 45px;
`

const CardText = styled.span`
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const ProductText = styled(CardText)`
  color: #222;
`

export const PriceText = styled(CardText)`
  color: #7cbbf0;
`

export const FavoriteContent = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`
