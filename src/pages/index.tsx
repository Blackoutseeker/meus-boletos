import { GetStaticProps } from 'next'
import { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IItem } from '../database/interfaces'
import { IItemReducer, IItemsAction } from '../store/reducers/items'
import Head from 'next/head'
import Container from '../components/container'
import Item from '../components/item'
import LoginButton from '../components/loginButton'
import FloatingActionButton from '../components/floatingActionButton'
import LoginModal from '../components/loginModal'
import AddModal from '../components/addModal'
import ZeroData from '../components/zeroData'
import firebase from '../services/firebase'

interface IProps {
  getData: IItem[]
}

const Home: FC<IProps> = ({ getData }) => {
  const dispatch = useDispatch()
  const items = useSelector((state: IItemReducer) => state.items)
  const [loginModal, setLoginModal] = useState<boolean>(false)
  const [addModal, setAddModal] = useState<boolean>(false)

  useEffect(() => {
    dispatch<IItemsAction>({
      type: 'ADD_MULTI',
      payload: { itemsList: getData }
    })
  }, [getData, dispatch])

  return (
    <Container>
      <Head>
        <title>Meus Boletos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginButton setLoginModal={setLoginModal} />
      <FloatingActionButton
        setAddModal={setAddModal}
        setLoginModal={setLoginModal}
      />
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <AddModal addModal={addModal} setAddModal={setAddModal} />
      {items?.length <= 0 ? (
        <ZeroData>Nenhum boleto disponível para download</ZeroData>
      ) : (
        items.map((item: IItem) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              downloadUrl={item.downloadUrl}
              validity={item.validity}
              fileName={item.fileName}
              id={item.id}
              setLoginModal={setLoginModal}
            />
          )
        })
      )}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getData: IItem[] = []
  await firebase
    .database()
    .ref('/')
    .once('value', snapshot => {
      if (snapshot.hasChildren()) {
        snapshot.forEach(snapshotchild => {
          getData.push({
            title: snapshotchild.val().title,
            validity: snapshotchild.val().validity,
            downloadUrl: snapshotchild.val().downloadUrl,
            fileName: snapshotchild.val().fileName,
            id: snapshotchild.val().id
          })
        })
      }
    })
  return {
    props: {
      getData: getData
    },
    revalidate: 20
  }
}

export default Home
