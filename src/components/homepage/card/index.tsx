import { FC, memo } from 'react'
import Image from 'next/image'
import {
  CardContainer,
  CardLine,
  DescriptionContainer,
  ProductContent,
  ProductText,
  PriceContent,
  PriceText,
  FavoriteContent
} from './style'
import FavoriteIcon from '@assets/icons/favorito.svg'

export interface ICard {
  imageUrl: string
  productName: string
  price: string
}

const Card: FC<ICard> = props => {
  const { imageUrl, productName, price } = props
  return (
    <CardContainer>
      <Image src={imageUrl} alt={'Conjunto'} width={170} height={158} />
      <CardLine />
      <DescriptionContainer>
        <ProductContent>
          <ProductText>{productName}</ProductText>
        </ProductContent>
        <PriceContent>
          <PriceText>{price}</PriceText>
        </PriceContent>
        <FavoriteContent>
          <Image src={FavoriteIcon} alt={'Favoritar'} width={25} height={25} />
        </FavoriteContent>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default memo(Card)
