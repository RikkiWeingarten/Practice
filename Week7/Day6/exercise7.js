const body = document.querySelector('body');
const section = document.createElement('section');
section.classList.add('listBooks');
body.appendChild(section);

const allBooks = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/book/h/m/v/harry-potter-and-the-sorcerer-s-stone-original-imaghpyxdu9rztqb.jpeg?q=70&crop=false', 
        alreadyRead: true
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        image: 'https://m.media-amazon.com/images/I/41t6sxfErQL._SY445_SX342_.jpg', 
        alreadyRead: false
    }
];

const bookSection = document.querySelector('.listBooks')

allBooks.forEach(book => {
 
    const bookDiv = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px'; 
    bookDiv.appendChild(img); 
    
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }
    bookDiv.appendChild(bookDetails);

    bookSection.appendChild(bookDiv);
});
