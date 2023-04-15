1
const value = "3"
console.log(3 + 4 + 3)

2
const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname}")

3
LeoMusvaire (Owed='9394.00')
SarahKleinhans (Owed='4582.20')


  TotalAmount (owed='14 976.20')

{leoName} + {leoSurname} + "Owed" + "R" + {sarahBalance}+{leoName} + {surname} + "Owed" + "R" + {sarahBalance}(owed='NaN')

constleoName  ('Leo')
const leoSurname = ('Musvaire')
const leoBalance = ('-9394')

const sarahName = ('Sarah')
const sarahSurname = ('Kleinhans')
const sarahBalance = ('-4582.21000111')

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)