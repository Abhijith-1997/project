function createBook(){
    alert("inside create book")
}
function createBook(){
    let book_name=b_name.value;
    let author=b_author.value;
    let price=b_price.value;
    let pages=b_pages.value;
    let book={
        book_name,author,price,pages
    }
    localStorage.setItem(book_name,JSON.stringify(book))
}
function displayBook(book){
    let html_data=`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${book.book_name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.author}</li>
      <li class="list-group-item">${book.price}</li>
      <li class="list-group-item">${book.pages}</li>
    </ul>
  </div>`
 result.innerHTML=html_data

}
function findBook(){
    let book_name=bk_name.value;
    console.log(book_name );
    let book=JSON.parse(localStorage.getItem(book_name))
    if(book){
       displayBook(book)
    }
    else{
        console.log("not find");
    }

}

function allBooks(){
  alert("books")
  let books=[];
  for(let i=0;i<localStorage.length;i++){
    books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }
  console.log("books");
let html_data=""
for(let book of books){
  html_data+=`<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${book.book_name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${book.author}</li>
    <li class="list-group-item">${book.price}</li>
    <li class="list-group-item">${book.pages}</li>
  </ul>
</div>`
}
result.innerHTML=html_data
}