document.addEventListener('DOMContentLoaded', () => {
    // get the form from HTML file
    const formElem = document.getElementById('formElem');
    
    // listen for submit on form
    formElem.addEventListener('submit', (event) => {
        // prevent page from reloading
        event.preventDefault();
    })

    // create new formData (key:value pairs for data entered on the form)
    const formData = new FormData(formElem);

    // add new key:value to formData not shown on HTML form
    formData.append('Date Submitted: ', new Date());

    // look at each item from form/(key:value) pairs
    for (let key of formData.keys()) {
        // show each key:value pair in console
        console.log(key, formData.get(key));
    }
})
