const slides1 = document.querySelectorAll('.slide1')
const slides2 = document.querySelectorAll('.slide2')
const slides3 = document.querySelectorAll('.slide3')
const body = document.body

let activeSlide = document.querySelector(".mainActive")?.getAttribute("id")
let count1 = 0
let count2 = 0
let count3 = 0


function addActiveClasses1() {
	slides1.forEach((slide) => {
		slide.addEventListener('click', () => {
			++count1
			clearActiveClasses1()
			slide.classList.add('active')
			slide.classList.add('mainActive')
			activeSlide = document.querySelector(".mainActive").getAttribute("id")
			setBgToBody(activeSlide, 1)
			slide.classList.remove('mainActive')
		})
	})
}

function addActiveClasses2() {
	slides2.forEach((slide) => {
		slide.addEventListener('click', () => {
			++count2
			clearActiveClasses2()
			slide.classList.add('active')
			slide.classList.add('mainActive')
			activeSlide = document.querySelector(".mainActive").getAttribute("id")
			setBgToBody(activeSlide, 2)
			slide.classList.remove('mainActive')
		})
	})
}

function addActiveClasses3() {
	slides3.forEach((slide) => {
		slide.addEventListener('click', () => {
			++count3
			clearActiveClasses3()
			slide.classList.add('active')
			slide.classList.add('mainActive')
			activeSlide = document.querySelector(".mainActive").getAttribute("id")
			setBgToBody(activeSlide, 3)
			slide.classList.remove('mainActive')
		})
	})
}

function clearActiveClasses1() {
	if (count1 == 2) {
		slides1.forEach((slide) => {
			slide.classList.remove('active')
			slide.classList.remove('mainActive')
			return count1 = 0
		})
	}
}

function clearActiveClasses2(count) {
	if (count2 == 2) {
		slides2.forEach((slide) => {
			slide.classList.remove('active')
			slide.classList.remove('mainActive')
			return count2 = 0
		})
	}
}

function clearActiveClasses3(count) {
	if (count3 == 2) {
		slides3.forEach((slide) => {
			slide.classList.remove('active')
			slide.classList.remove('mainActive')
			return count3 = 0
		})
	}
}

addActiveClasses1()
addActiveClasses2()
addActiveClasses3()


function setBgToBody(activeSlide, number) {
	if (number == 1) body.style.backgroundImage = slides1[activeSlide]?.style?.backgroundImage
	if (number == 2) body.style.backgroundImage = slides2[activeSlide]?.style?.backgroundImage
	if (number == 3) body.style.backgroundImage = slides3[activeSlide]?.style?.backgroundImage
}
