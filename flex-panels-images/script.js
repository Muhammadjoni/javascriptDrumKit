const panels = document.querySelectorAll('.panel');

const toggleOpen = event => {
    event.target.classList.toggle('open');
}

const toggleActive = event => {
    console.log(event.propertyName)
   if (event.propertyName.includes('flex')) {
        event.target.classList.toggle('open-active');
   }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


