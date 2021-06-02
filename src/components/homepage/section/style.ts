import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
`

export const SectionHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionTitle = styled.span`
  color: #999;
  font-size: 30px;
  margin-right: 40px;
`

export const SectionLine = styled.hr`
  width: 100%;
  border: 2px solid #999;
`

export const ListWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const List = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  overflow-x: auto;
`
