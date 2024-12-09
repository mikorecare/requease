import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDocs,
  addDoc,
} from 'firebase/firestore'; // Firestore methods
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environment/environment.prod';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore: Firestore;

  constructor() {
    const app = initializeApp(environment);
    this.firestore = getFirestore(app);
  }

  async getData(dbCollection: string): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.firestore, dbCollection));
    return querySnapshot.docs.map((doc) => doc.data());
  }

  async addData(data: any): Promise<void> {
    const docRef = await addDoc(collection(this.firestore, 'users'), data);
    console.log('Document written with ID: ', docRef.id);
  }
}
