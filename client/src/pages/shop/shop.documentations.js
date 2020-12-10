// reach collections in firestore
// const collectionRef = firestore.collection('collections');

// --- this is using fetch pattern ---
// fetch('https://firestore.googleapis.com/v1/projects/krown-apparel-db/databases/(default)/documents/collections')
//     .then( res => res.json())
//     .then(collections => console.log(collections));

// --- this is using promise pattern ---
// collectionRef.get().then(snapshot => {
//     const collectionsMap = convertSelectionSnapshotToMap(snapshot); 
//     updateCollections(collectionsMap);
//     this.setState({loading: false});
// });

// --- you can use observer pattern to subscribe to firestore like this ---
// collectionRef.onSnapshot( async snapshot => {
//     const collectionsMap = convertSelectionSnapshotToMap(snapshot); 
//     updateCollections(collectionsMap);
//     this.setState({loading: false});
// });