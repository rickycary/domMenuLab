console.log("Connected")

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
const mainEL = document.querySelector('main');
console.log(mainEL)

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEL.style.backgroundColor = 'var(--main-bg)'


// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEL.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
// Add a class of flex-ctrto mainEl.
