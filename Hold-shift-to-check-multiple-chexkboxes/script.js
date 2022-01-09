const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;




const handleCheck = (e) => {

    // Check whether they had shift key down 
    // And check that they are checking it
    let inBetween = false;
    if(e.shiftKey && e.target.checked) {
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === e.target || checkbox === lastChecked) {
                inBetween = !inBetween
            console.log('Checking them in between');
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = e.target;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

