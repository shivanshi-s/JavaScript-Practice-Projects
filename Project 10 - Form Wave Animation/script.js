const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
   label.innerHTML = label.innerText
      .split('')
      .map((letter,idx)=> `<span style="transition-delay:${idx* 50}ms"}>${letter}</span>`)
      .join('')
})

//transition-delayuse index 0,1,2,3, and multiply with 50, so they multiply after 50x miliseconds