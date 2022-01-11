// darkBtn = // to target
darkBtn = document.querySelector('.dark')
// beigeBtn = // to target
beigeBtn = document.querySelector('.beige')
// switchBtn = // to target
switchBtn = document.querySelector('.switch')

body = document.querySelector('body')

darkBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'black'
})

// beigeBtn.addEventListener(event, callback)
beigeBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'beige'
})

// beigeBtn.addEventListener(event, callback)
switchBtn.addEventListener('click', () => {
    if (body.style.backgroundColor === "beige") {
      document.body.style.backgroundImage = "url('https://unsplash.com/photos/PbspBt8DOyY')";
    } else {
      body.style.backgroundColor = "beige";
    }
  }
)
