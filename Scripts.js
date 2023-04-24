1
const value = "3";
console.log(parseInt(value) + 4 + parseInt(value));

2
const nickname= "Timmy";
const firstname = "Timothy";

if (nickname || firstname) {
  console.log(`Good Morning, ${nickname || firstname}!`);
} else {
  console.log("Good morning!");
}

3


Leo Musvaire (Owed: R 4,811.79)
Sarah Kleinhans (Owed: R 9,164.41)

----------------------------------
  Total amount owed: R 14,976.20  
----------------------------------



const leoName = "Leo";
const leoSurname = "Musvaire";
const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const leoBalance = 9394.00;
const sarahBalance = 4582.20;

console.log("");
console.log(`${leoName} ${leoSurname} (Owed: R ${leoBalance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })})`);
console.log(`${sarahName} ${sarahSurname} (Owed: R ${sarahBalance.toLocaleString('en-ZA', { minimumFractionDigits: 2 })})`);
console.log("\n----------------------------------");
console.log("  Total amount owed: R " + (leoBalance + sarahBalance).toLocaleString('en-ZA', { minimumFractionDigits: 2 }));
console.log("----------------------------------");

const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} Owed R${parseFloat(leoBalance).toFixed(2)}`;
const sarah = `${sarahName} ${sarahSurname} Owed R${parseFloat(sarahBalance).toFixed(2)}`;
const total = "Total amount owed: ";
const formattedOwed = `R ${parseFloat(owed).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
const result = `
${leo}
${sarah}

${divider}
  ${total}${formattedOwed}
${divider}
`;

console.log((leoBalance + sarahBalance));
console.log("  Total amount owed: R " + (leoBalance + sarahBalance).toLocaleString('en-ZA', { minimumFractionDigits: 2 }));