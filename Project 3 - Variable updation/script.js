const input = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // console.log(this.value);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    //console.log(this.value);
}

input.forEach(input => input.addEventListener('change',handleUpdate))
input.forEach(input => input.addEventListener('mousemove',handleUpdate))
