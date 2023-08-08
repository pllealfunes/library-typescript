import '/input.css'

//const bookShelf = document.getElementById("bookShelf") as HTMLTableElement
//const myList: string | null = localStorage.getItem("books")

// const bookList = (): void => {

//     if (myList) {

//         const parsedList: { id: string, title: string, author: string, pageCount: string, readStatus: boolean }[] = JSON.parse(myList)

//         for (let book of parsedList) {

//             const bookContainer = document.createElement("tr");
//             const readContainer = document.createElement("td");
//             const deleteContainer = document.createElement("td");


//             const deleteBtn = document.createElement("button")

//             const title = document.createElement("td")
//             const author = document.createElement("td")
//             const count = document.createElement("td")
//             const readStatus = document.createElement("button")

//             bookContainer.setAttribute("class", "bookContainer")


//             deleteBtn.setAttribute("class", "deleteBtn")
//             deleteBtn.textContent = "X"


//             title.setAttribute("class", "bookTitle")
//             title.textContent = book.title
//             author.setAttribute("class", "bookAuthor")
//             author.textContent = `By: ${book.author}`
//             count.setAttribute("class", "pageCount")
//             count.textContent = `Pages: ${book.pageCount}`
//             readStatus.textContent = book.readStatus ? "Read" : "Not Read"
//             readStatus.setAttribute("class", "readStatus")

//             deleteContainer?.appendChild(deleteBtn);
//             bookContainer?.appendChild(deleteContainer);
//             readContainer?.appendChild(readStatus);
//             bookContainer?.appendChild(title);
//             bookContainer?.appendChild(author);
//             bookContainer?.appendChild(count);
//             bookContainer?.appendChild(readContainer);
//             bookContainer?.appendChild(deleteContainer);

//             // Insert a row at the end of table
//             var newRow = bookShelf.insertRow();

//             // Insert a cell at the end of the row
//             var newCell = newRow.insertCell();

//             newCell?.appendChild(bookContainer);

//             bookShelf.appendChild(newCell)

//             // Add event listener on "read" book button
//             readStatus.addEventListener('click', () => {
//                 const newStatus = book.readStatus ? book.readStatus = false : book.readStatus = true
//                 newStatus ? readStatus.innerText = "Read" : readStatus.innerText = "Not Read"
//                 console.log(parsedList);

//             })

//             // Delete book from books array
//             deleteBtn.addEventListener('click', () => {
//                 const newBooks = books.filter(singleBook => singleBook.id !== book.id)
//                 books = newBooks;
//                 bookContainer.remove();
//                 // Save to Local Storage
//                 localStorage.setItem("books", JSON.stringify(books))
//             })
//         }

//     }

// }

// document.addEventListener("DOMContentLoaded", bookList)

interface Book {
    id: string,
    title: string,
    author: string,
    pages: string,
    checked: boolean
}

class NewBook implements Book {

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public pages: string,
        public checked: boolean = false
    ) { }
}

let books: Book[] = []

const newBookBtn = document.getElementById("newBookBtn") as HTMLButtonElement

newBookBtn.addEventListener("click", (event: Event): void => {
    event.preventDefault()

    // Get the new book values from form
    const bookTitle = (document.getElementById("newBookTitle") as HTMLInputElement).value
    const bookAuthor = (document.getElementById("newBookAuthor") as HTMLInputElement).value
    const pageCount = (document.getElementById("pageCount") as HTMLInputElement).value
    const ifRead = (document.getElementById("ifRead") as HTMLInputElement).checked
    const bookId = books.length ? books.length + 1 : 1

    // Create new book object
    const createBook = new NewBook(String(bookId), bookTitle, bookAuthor, pageCount, ifRead)


    // Create book

    const bookContainer = document.createElement("tr");
    bookContainer.setAttribute("class", "bookContainer")

    const deleteContainer = document.createElement("td");
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.textContent = "X"
    deleteContainer?.appendChild(deleteBtn);

    const title = document.createElement("td")
    title.setAttribute("class", "bookTitle")
    title.textContent = createBook.title

    const author = document.createElement("td")
    author.setAttribute("class", "bookAuthor")
    author.textContent = `By: ${createBook.author}`

    const count = document.createElement("td")
    count.setAttribute("class", "pageCount")
    count.textContent = `Pages: ${createBook.pages}`

    const readContainer = document.createElement("td");
    const readStatus = document.createElement("button")
    readStatus.textContent = createBook.checked ? "Read" : "Not Read"
    readStatus.setAttribute("class", "readStatus")
    readContainer?.appendChild(readStatus);


    bookContainer?.appendChild(title);
    bookContainer?.appendChild(author);
    bookContainer?.appendChild(count);
    bookContainer?.appendChild(readContainer);
    bookContainer?.appendChild(deleteContainer);

    // Create a new row and cell
    const newRow = document.createElement("tr");
    //const newCell = document.createElement("td");

    // Append the bookContainer to the new cell
    //newCell?.appendChild(bookContainer);

    // Append the new cell to the new row
    newRow.appendChild(bookContainer);

    // Assuming 'bookShelf' is the ID of your table
    const bookShelf = document.getElementById("bookShelf");

    // Append the new row to the table
    bookShelf?.appendChild(newRow);

    // Push new book to books array
    books.push(createBook)

    // Save to Local Storage
    localStorage.setItem("books", JSON.stringify(books))

    console.log(books)

    // // Add event listener on "read" book button
    // readStatus.addEventListener('click', () => {
    //     const newStatus = createBook.checked ? createBook.checked = false : createBook.checked = true
    //     newStatus ? readStatus.innerText = "Read" : readStatus.innerText = "Not Read"
    //     console.log(books)
    // })

    // // Delete book from books array
    // deleteBtn.addEventListener('click', () => {
    //     const newBooks = books.filter(book => book.id !== createBook.id)
    //     books = newBooks;
    //     bookContainer.remove();
    //     // Save to Local Storage
    //     //localStorage.setItem("books", JSON.stringify(books))
    //     return console.log(newBooks)
    // })
})