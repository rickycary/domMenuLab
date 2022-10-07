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
// Add a class of flex-ctr to mainEl.
mainEL.classList.add("flex-ctr")


//=======================
// 2
//=======================


// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.querySelector('#top-menu')
console.log(topMenuEl)

// Task 2.1 =======================================
// Set the height topMenuEl element to be 100%.
// Still needs work 
topMenuEl.style.height = "100%"
console.log(topMenuEl)
//=================================================

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// Task 2.3

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")


// Task 3.1

// Iterate over the entire menuLinks array and for each "link" object:

//     Create an <a> element.



//     On the new element, add an href attribute with its value set to the href property of the "link" object.



//     Set the new element's content to the value of the text property of the "link" object.



//     Append the new element to the topMenuEl element.




