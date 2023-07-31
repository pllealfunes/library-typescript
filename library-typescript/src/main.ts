import './style.css'

const bookList = (): void => {
    const myList: string | null = localStorage.getItem("books")

    if (myList) {

        const parsedList: { id: string, title: string, author: string, pageCount: string, readStatus: boolean }[] = JSON.parse(myList)

        for (let book of parsedList) {
            const shelf = document.getElementById("shelf") as HTMLFormElement

            const bookContainer = document.createElement("li");
            const deleteContainer = document.createElement("div");


            const deleteBtn = document.createElement("button")

            const title = document.createElement("h3")
            const author = document.createElement("p")
            const count = document.createElement("p")
            const readStatus = document.createElement("button")

            bookContainer.setAttribute("class", "book")


            deleteBtn.setAttribute("class", "deleteBtn")
            deleteBtn.textContent = "X"


            title.setAttribute("class", "bookTitle")
            title.textContent = book.title
            author.setAttribute("class", "bookAuthor")
            author.textContent = `By: ${book.author}`
            count.setAttribute("class", "pageCount")
            count.textContent = `Pages: ${book.pageCount}`
            readStatus.textContent = book.readStatus ? "Read" : "Not Read"
            readStatus.setAttribute("class", "readStatus")

            shelf?.appendChild(bookContainer);
            bookContainer?.appendChild(deleteContainer);
            deleteContainer?.appendChild(deleteBtn);
            bookContainer?.appendChild(title);
            bookContainer?.appendChild(author);
            bookContainer?.appendChild(count);
            bookContainer?.appendChild(readStatus);

            // Add event listener on "read" book button
            readStatus.addEventListener('click', () => {
                const newStatus = book.readStatus ? book.readStatus = false : book.readStatus = true
                newStatus ? readStatus.innerText = "Read" : readStatus.innerText = "Not Read"
                console.log(parsedList);

            })

            // Delete book from books array
            deleteBtn.addEventListener('click', () => {
                const newBooks = books.filter(singleBook => singleBook.id !== book.id)
                books = newBooks;
                bookContainer.remove();
                // Save to Local Storage
                localStorage.setItem("books", JSON.stringify(books))
            })
        }

    }

}

document.addEventListener("DOMContentLoaded", bookList)

interface Book {
    id: string,
    title: string,
    author: string,
    pages: string,
    checked: boolean
}

class newBook implements Book {

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public pages: string,
        public checked: boolean = false
    ) { }
}

let books: Book[] = []

const newBookBtn = document.getElementById("newBookForm") as HTMLFormElement

newBookBtn.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    // Get the new book values from form
    const bookTitle = (document.getElementById("newBookTitle") as HTMLInputElement).value
    const bookAuthor = (document.getElementById("newBookAuthor") as HTMLInputElement).value
    const pageCount = (document.getElementById("pageCount") as HTMLInputElement).value
    const ifRead = (document.getElementById("ifRead") as HTMLInputElement).checked
    const bookId = books.length ? books.length + 1 : 1

    // Create new book object
    const createBook = new newBook(String(bookId), bookTitle, bookAuthor, pageCount, ifRead)

    const shelf = document.getElementById("shelf") as HTMLFormElement

    // Create book details li

    const bookContainer = document.createElement("li");
    const deleteContainer = document.createElement("div");


    const deleteBtn = document.createElement("button")

    const title = document.createElement("h3")
    const author = document.createElement("p")
    const count = document.createElement("p")
    const readStatus = document.createElement("button")

    bookContainer.setAttribute("class", "book")


    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.textContent = "X"


    title.setAttribute("class", "bookTitle")
    title.textContent = createBook.title
    author.setAttribute("class", "bookAuthor")
    author.textContent = `By: ${createBook.author}`
    count.setAttribute("class", "pageCount")
    count.textContent = `Pages: ${createBook.pages}`
    readStatus.textContent = createBook.checked ? "Read" : "Not Read"
    readStatus.setAttribute("class", "readStatus")

    shelf?.appendChild(bookContainer);
    bookContainer?.appendChild(deleteContainer);
    deleteContainer?.appendChild(deleteBtn);
    bookContainer?.appendChild(title);
    bookContainer?.appendChild(author);
    bookContainer?.appendChild(count);
    bookContainer?.appendChild(readStatus);

    // Push new book to books array
    books.push(createBook)

    // Save to Local Storage
    localStorage.setItem("books", JSON.stringify(books))

    console.log(books)

    // Add event listener on "read" book button
    readStatus.addEventListener('click', () => {
        const newStatus = createBook.checked ? createBook.checked = false : createBook.checked = true
        newStatus ? readStatus.innerText = "Read" : readStatus.innerText = "Not Read"
        console.log(books)
    })

    // Delete book from books array
    deleteBtn.addEventListener('click', () => {
        const newBooks = books.filter(book => book.id !== createBook.id)
        books = newBooks;
        bookContainer.remove();
        // Save to Local Storage
        localStorage.setItem("books", JSON.stringify(books))
        return console.log(newBooks)
    })
})


