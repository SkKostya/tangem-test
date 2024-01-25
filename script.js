;(() => {
  const codeButtons = document.querySelectorAll('.promo-code')
  codeButtons.forEach((element) => {
    element.addEventListener('click', () => {
      navigator.clipboard.writeText(element.getAttribute('data-code'))
    })
  })
})()

// ------------------------------
;(() => {
  const isHidden = localStorage.getItem('tangem-add-hidden') === 'true'

  const lineAdd = document.querySelector('.line-add')
  const blockAdd = document.querySelector('.block-add')

  const showButton = document.querySelector('.show-again')
  showButton.addEventListener('click', () => {
    lineAdd.classList.remove('hidden')
    blockAdd.classList.remove('hidden')
    localStorage.setItem('tangem-add-hidden', 'false')
    showButton.style.display = 'none'

    blockAdd.style.opacity = 0
    setTimeout(() => {
      blockAdd.style.opacity = 1
    }, 200)
  })

  if (isHidden) {
    lineAdd.classList.add('hidden')
    blockAdd.classList.add('hidden')
    showButton.style.display = 'block'
  } else {
    showButton.style.display = 'none'
  }

  const closeButtons = document.querySelectorAll('.close-button')

  closeButtons.forEach((elem) => {
    elem.addEventListener('click', () => {
      lineAdd.classList.add('hidden')
      blockAdd.classList.add('hidden')
      localStorage.setItem('tangem-add-hidden', 'true')
      showButton.style.display = 'block'
    })
  })
})()

// ------------------------------
;(() => {
  const lineAdd = document.querySelector('.line-add')
  const blockAdd = document.querySelector('.block-add')

  const options = {
    rootMargin: '0px',
    threshold: 0,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        blockAdd.classList.remove('block-add--shown')
      } else {
        blockAdd.classList.add('block-add--shown')
      }
    })
  }, options)

  observer.observe(lineAdd)
})()
