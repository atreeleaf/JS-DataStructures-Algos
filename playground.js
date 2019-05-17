const books = {
  name: 'Heaven on Earth',
  read: ()=>{
    console.log('It was the year of 1878, when the moon fell, and the lives of the citizens of Newark took a twist.')
  },
  author: 'Andrew Tang',
  academy: 'Hack Reactor'
}


const publicationdate = {
  date: 'August 20th',
  year: '1948'
}


const booksWithPublicationDate = Object.assign(books,publicationdate);


booksWithPublicationDate.read()