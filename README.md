# datename

- you can get the day name, month name and year of this day or any other date.

# Useage

```js
import { getDate } from "datename";

// Today
const today = getDate();

console.log(today.getDayName()); // Tuesday
console.log(today.getMonth()); // June
console.log(today.getYear()); // 2023

// any date
const anyDate = getDate("2022-03-25");

console.log(anyDate.getDayName()); // Friday
console.log(anyDate.getMonth()); // March
console.log(anyDate.getYear()); // 2022
```
