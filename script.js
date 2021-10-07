const fromDate = new Date("10/05/1995")
const toDate = new Date("10/02/2019")

let dt = toDate.getDate()
let mt = toDate.getMonth()
let yt = toDate.getFullYear()

let df = fromDate.getDate()
let mf = fromDate.getMonth()
let yf = fromDate.getFullYear()

let years = yt - yf
let months = mt - mf
let dates = dt - df

let difM = mt - mf
let difD = dt - df
let difY = yt - yf

if (difM < 0) {
	years -= 1

	if (difD >= 0) {
		months = 12 - mf + mt
	} else {
		months = 12 - mf + mt - 1
		dates = dt + (new Date(yt - 1, mf, 0).getDate() - df + 1)
	}
} else {
	if (difM === 0 && difD < 0) {
		years -= 1
	}
	if (difD < 0) {
		months = mt - 1 - mf
		dates = dt + (new Date(yt, mt, 0).getDate() - df)
	}
	months = months < 0 ? 12 + months : months
}

console.log(`${years} Years ${months} Months ${dates} Days`)
