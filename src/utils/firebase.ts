import type { FirebaseOptions, FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import type { Database } from 'firebase/database'
import { getDatabase } from 'firebase/database'
import type { FirebaseStorage } from 'firebase/storage'
import { getStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

const app: FirebaseApp = initializeApp(firebaseConfig)

export const database: Database = getDatabase(app)
export const storage: FirebaseStorage = getStorage(app)
