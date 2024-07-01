import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {FormsModule} from "@angular/forms";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-project-994c9","appId":"1:320270123720:web:0cae3a695352ac176cdbfd","storageBucket":"angular-firebase-project-994c9.appspot.com","apiKey":"AIzaSyDyLN6oaRep1CBE6tjYIpkkailujaOKaeA","authDomain":"angular-firebase-project-994c9.firebaseapp.com","messagingSenderId":"320270123720"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage())]
};
