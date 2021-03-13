import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  databaseURL: process.env.DATABASE_URL!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  appId: process.env.APP_ID!
}

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
