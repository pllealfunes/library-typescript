import './style.css'

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

const newBookBtn = document.getElementById("newBookForm") as HTMLFormElement

newBookBtn.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    // Get the new item value
    const bookTitle = (document.getElementById("newBookTitle") as HTMLInputElement).value
    const bookAuthor = (document.getElementById("newBookAuthor") as HTMLInputElement).value
    const pageCount = (document.getElementById("pageCount") as HTMLInputElement).value
    const ifRead = (document.getElementById("ifRead") as HTMLInputElement).checked

    const createBook = new newBook("1", bookTitle, bookAuthor, pageCount, ifRead)
    console.log(createBook)

    const shelf = document.getElementById("shelf") as HTMLFormElement

    const bookContainer = document.createElement("li");
    const deleteContainer = document.createElement("div");
    const deleteBtn = document.createElement("button")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const count = document.createElement("p")
    const readStatus = document.createElement("button")

    bookContainer.textContent = createBook.title
    deleteBtn.textContent = "X"
    title.textContent = createBook.title
    author.textContent = createBook.author
    count.textContent = createBook.pages
    readStatus.textContent = createBook.checked ? "Read" : "Not Read"

    shelf?.appendChild(bookContainer);
    bookContainer?.appendChild(deleteContainer);
    deleteContainer?.appendChild(deleteBtn);
    bookContainer?.appendChild(title);
    bookContainer?.appendChild(author);
    bookContainer?.appendChild(count);
    bookContainer?.appendChild(readStatus);
})



// <div class="deleteContainer">
//             <button class="deleteBtn">X</button>
//           </div>
//           <h3 class="bookTitle">Book 1</h3>
//           <p class="bookAuthor">By: Author 1</p>
//           <p class="pageCount">Pages: 123</p>
//           <button class="readStatus">Read</button>
