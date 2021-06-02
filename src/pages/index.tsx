import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import faker from 'faker'
import { ICard } from '@components/homepage/card'
import MainContainer from '@components/mainContainer'
import Header from '@components/header'
import PageContainer from '@components/pageContainer'
import Slider from '@components/homepage/slider'
import Section from '@components/homepage/section'
import Footer from '@components/footer'
import Conjunto from '@assets/images/Conjunto.png'

interface IProps {
  cards: ICard[]
}

const Home: FC<IProps> = props => {
  const { cards } = props
  return (
    <MainContainer>
      <Head>
        <title>Homepage - Presente da Cegonha</title>
        <meta
          name="keywords"
          content="Presente, Cegonha, Presente da Cegonha, Homepage"
        />
        <meta
          name="description"
          content="Confira roupas, enxoval, calçados e brinquedos em nossa homepage!"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <PageContainer>
        <Slider />
        <Section sectionTitle={'Roupas'} cards={cards} />
        <Section sectionTitle={'Enxoval'} cards={cards} />
      </PageContainer>
      <Footer />
    </MainContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cards: ICard[] = []

  for (let i = 0; i < 5; i++) {
    const generatePrice = faker.commerce
      .price(100, 300, 2, 'R$ ')
      .replace('.', ',')
    cards.push({
      imageUrl: Conjunto,
      price: generatePrice,
      productName: 'Conjunto Kids'
    })
  }

  return {
    props: {
      cards: cards
    },
    revalidate: 15
  }
}

export default Home
