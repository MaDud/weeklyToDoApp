import rsf from '../../fbConfig';

export function* getTasks () {
    const snapshot = yield rsf.firestore.getCollection( 'tasks');
    console.log(snapshot)
}