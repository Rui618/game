firebase.initializeApp({
  projectId: 'divinity-4d64e'
});
var db = firebase.firestore();
var ref = db.collection('fruit').doc('apple');

ref.set({
  total: 500,
  good: 480,
  sale: 330
}).then(() => {
  console.log('set data successful');
});