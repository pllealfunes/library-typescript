import './input.css'

const bookShelf = document.querySelector("#bookTable") as HTMLTableElement
const myList: string | null = localStorage.getItem("books")
const books: Book[] = myList ? JSON.parse(myList) : []


interface Book {
    id: string,
    title: string,
    author: string,
    pages: string,
    status: boolean
}

class NewBook implements Book {

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public pages: string,
        public status: boolean = false
    ) { }
}

const createBookElement = (book: Book): HTMLTableRowElement => {


    // Create book

    const bookContainer = document.createElement("tr")
    bookContainer.setAttribute("class", "bookContainer border-b dark:border-neutral-500")

    const deleteContainer = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("id", "deleteBtn")
    deleteBtn.textContent = "X"
    deleteBtn.setAttribute("class", "text-red-700 whitespace-nowrap px-6 py-4 rounded-sm")
    deleteContainer?.appendChild(deleteBtn)

    const title = document.createElement("td")
    title.setAttribute("class", "bookTitle")
    title.textContent = book.title
    title.setAttribute("class", "whitespace-nowrap px-6 py-4")

    const author = document.createElement("td")
    author.setAttribute("class", "bookAuthor")
    author.textContent = book.author
    author.setAttribute("class", "whitespace-nowrap px-6 py-4")

    const count = document.createElement("td")
    count.setAttribute("class", "pageCount")
    count.textContent = book.pages
    count.setAttribute("class", "whitespace-nowrap px-6 py-4")

    const readContainer = document.createElement("td")
    const readStatus = document.createElement("button")
    readStatus.textContent = book.status ? "Read" : "Not Read"
    readStatus.setAttribute("id", "readStatus")
    book.status ? readStatus.setAttribute("class", "whitespace-nowrap px-3 py-2 rounded-sm bg-green-600 text-white") : readStatus.setAttribute("class", "whitespace-nowrap px-3 py-2 rounded-sm bg-red-700 text-white")
    readContainer?.appendChild(readStatus)


    bookContainer?.appendChild(title)
    bookContainer?.appendChild(author)
    bookContainer?.appendChild(count)
    bookContainer?.appendChild(readContainer)
    bookContainer?.appendChild(deleteContainer)

    return bookContainer;
};



const updateReadStatus = (book: Book, readStatusButton: HTMLButtonElement) => {
    book.status = !book.status;
    readStatusButton.textContent = book.status ? "Read" : "Not Read";
    book.status ? readStatusButton.setAttribute("class", "whitespace-nowrap px-3 py-2 rounded-sm bg-green-600 text-white") : readStatusButton.setAttribute("class", "whitespace-nowrap px-3 py-2 rounded-sm bg-red-700 text-white")

    // Update the status in the 'books' array
    if (books) {
        const bookIndex = books.findIndex(singleBook => singleBook.id === book.id);
        if (bookIndex !== -1) {
            books[bookIndex].status = book.status;

            // Update the 'books' array in local storage
            localStorage.setItem("books", JSON.stringify(books));
        }
    }
};

const deleteBook = (book: Book, bookContainer: HTMLTableRowElement) => {
    if (books) {
        const index = books.findIndex(singleBook => singleBook.id === book.id)
        if (index !== -1) {
            books.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(books))
            bookContainer.remove()
        }
    }
};


const addBookToTable = (book: Book) => {
    const addBook = createBookElement(book)
    const updateStatus = addBook.querySelector("#readStatus") as HTMLButtonElement;
    const deleteBtn = addBook.querySelector("#deleteBtn") as HTMLButtonElement;

    // Add event listener for read status
    updateStatus?.addEventListener('click', () => {
        updateReadStatus(book, updateStatus);
    });

    // Add event listener for delete button
    deleteBtn?.addEventListener('click', () => {
        deleteBook(book, addBook)
    });

    // Append the new row to the table
    bookShelf?.appendChild(addBook)
};

const newBookForm = document.querySelector("#newBookForm") as HTMLFormElement

newBookForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    // Get the new book values from form
    let bookTitle = (document.querySelector("#newBookTitle") as HTMLInputElement).value
    let bookAuthor = (document.querySelector("#newBookAuthor") as HTMLInputElement).value
    let pageCount = (document.querySelector("#pageCount") as HTMLInputElement).value
    let status = (document.querySelector("#ifRead") as HTMLInputElement).checked
    let bookId = books.length ? books.length + 1 : 1

    if (bookTitle && bookAuthor && pageCount && status !== null) {

        // Create new book object
        const createBook = new NewBook(String(bookId), bookTitle, bookAuthor, pageCount, status)

        books.push(createBook);
        localStorage.setItem("books", JSON.stringify(books))

        addBookToTable(createBook)

        newBookForm.reset()
    }
});

const bookList = (): void => {

    if (myList) {

        const parsedList: { id: string, title: string, author: string, pages: string, status: boolean }[] = JSON.parse(myList)

        for (let book of parsedList) {
            addBookToTable(book)
        }

    }

}

document.addEventListener("DOMContentLoaded", bookList)
