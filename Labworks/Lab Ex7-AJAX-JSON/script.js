const baseURL="https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b"

var booklist=[];
window.onload=()=>{
    var fetchbttn=document.getElementById("fetchButton");
    fetchbttn.addEventListener('click', async()=>{
        document.getElementById("loading").style.display="block"
        await fetch(baseURL).then((res)=>{
            res.json().then((data)=>{
                booklist=data.results.books
                console.log(booklist);
                document.getElementById("loading").style.display="none"
                for(let i = 0;i<booklist.length;i++){
                    var newbook=document.createElement('div')
                    newbook.className="single-book";
                    var bookimg=document.createElement('img')
                    bookimg.src=booklist[i].book_image
                    bookimg.className="book-image"
                    bookimg.width=100;
                    bookimg.height=100;
                    console.log(bookimg.src)
                    var bookinfo=document.createElement('div')
                    bookinfo.className="book-info"
                    var title=document.createElement('div')
                    title.className="book-title";
                    title.innerHTML=booklist[i].title
                    var author=document.createElement('div')
                    author.className="book-author";
                    author.innerHTML=booklist[i].author
                    var desc=document.createElement('div')
                    desc.className="book-desc ";
                    desc.innerHTML=booklist[i].description
                    bookinfo.appendChild(title)
                    bookinfo.appendChild(author)
                    bookinfo.appendChild(desc)
                    newbook.appendChild(bookimg)
                    newbook.appendChild(bookinfo)
                    document.getElementById("booklist").appendChild(newbook)
                }
            })
        }).catch(err=>{
            console.log(err);
        })
    })


}


