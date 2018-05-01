const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  },
  address: ['1299 S Juniper St', 'Batu Kikir']
}

const {publisher: {name: publisherName = 'Self-published'}} = book

const {address: [, , great = "Anonymous"]} = book

console.log(great) // expecting anonymous


