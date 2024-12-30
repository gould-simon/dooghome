import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { app } from '@/firebase/config';

export interface Waitlist {
    email: string;
    timestamp: string;
}


export const addToWaitList = async (email: string) => {
    const db = getFirestore(app);

    // Add email to Firebase
    await addDoc(collection(db, 'waitlist'), {
        email: email,
        timestamp: new Date().toISOString()
    });

    return true
}

export const checkEmailExists = async (email: string): Promise<boolean> => {
    const db = getFirestore(app);

    // Query the waitlist collection for the email
    const querySnapshot = await getDocs(
        query(
            collection(db, 'waitlist'),
            where('email', '==', email)
        )
    );

    // Return true if any documents match the email
    return !querySnapshot.empty;
}
