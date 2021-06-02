import { FC, memo } from 'react'
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionLine,
  ListWrapper,
  List
} from './style'
import Card, { ICard } from '@components/homepage/card'

interface IProps {
  sectionTitle: string
  cards: ICard[]
}

const Section: FC<IProps> = props => {
  const { sectionTitle, cards } = props

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{sectionTitle.toUpperCase()}</SectionTitle>
        <SectionLine />
      </SectionHeader>
      <ListWrapper>
        <List>
          {cards.map((card, index) => (
            <Card
              key={index.toString()}
              imageUrl={card.imageUrl}
              productName={card.productName}
              price={card.price}
            />
          ))}
        </List>
      </ListWrapper>
    </SectionContainer>
  )
}

export default memo(Section)
