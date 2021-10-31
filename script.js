

// declare all cladd & id
let formAlert = document.querySelector('.alert');
let bookName = document.querySelector('#book-name');
let authorName = document.querySelector('#author-name');
let publishDate = document.querySelector('#publish-date');
let btn = document.querySelector('.btn');
let bookList = document.querySelector('.book-list');
let bookAlert = document.querySelector('#book-alert');
let authorAlert = document.querySelector('#author-alert');
let publishAlert = document.querySelector('#publish-alert');


// new data add event
btn.addEventListener('click', function(event) {
    event.preventDefault();
    
    // all error validation
    if(bookName.value == '' && authorName.value == '' && publishDate.value == '') {
        formAlert.classList.remove('d-none');
        formAlert.innerHTML = 'Please fillup your all credential information!';
    }

    // single error validation
    else if(bookName.value == '' && authorName.value !== '' && publishDate.value !== '') {
        bookAlert.innerHTML = 'Please fillup your book name!';
        authorAlert.innerHTML = '';
        publishAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }
    else if(bookName.value !== '' && authorName.value == '' && publishDate.value !== '') {
        authorAlert.innerHTML = 'Please fillup your author name!';
        bookAlert.innerHTML = '';
        publishAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }
    else if(bookName.value !== '' && authorName.value !== '' && publishDate.value == '') {
        publishAlert.innerHTML = 'Please select your publish date!';
        bookAlert.innerHTML = '';
        authorAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }

    // double error validation
    else if(bookName.value !== '' && authorName.value == '' && publishDate.value == '') {
        authorAlert.innerHTML = 'Please fillup your author name!';
        publishAlert.innerHTML = 'Please select your publish date!';
        bookAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }
    else if(bookName.value == '' && authorName.value !== '' && publishDate.value == '') {
        bookAlert.innerHTML = 'Please fillup your book name!';
        publishAlert.innerHTML = 'Please select your publish date!';
        authorAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }
    else if(bookName.value == '' && authorName.value == '' && publishDate.value !== '') {
        bookAlert.innerHTML = 'Please fillup your book name!';
        authorAlert.innerHTML = 'Please fillup your author name!';
        publishAlert.innerHTML = '';
        formAlert.classList.add('d-none');
    }

    else {
        // single alert disable
        bookAlert.innerHTML = '';
        authorAlert.innerHTML = '';
        publishAlert.innerHTML = '';

        // success alert
        formAlert.classList.remove('d-none');
        formAlert.classList.replace('alert-danger', 'alert-info');
        formAlert.innerHTML = 'You have successfully added your information!'

        // create new table row
        const newRow = document.createElement('tr');
        bookList.appendChild(newRow);

        // create new book name
        const newBook = document.createElement('td');
        newBook.innerHTML = bookName.value;
        newRow.appendChild(newBook);

        // create ner author name 
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = authorName.value;
        newRow.appendChild(newAuthor);

        // create new publish date
        const newPublish = document.createElement('td');
        newPublish.innerHTML = publishDate.value;
        newRow.appendChild(newPublish);

        // reset all data
        bookName.value = '';
        authorName.value = '';
        publishDate.value = '';
    }
});


