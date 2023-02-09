// 1. var let const
// break up with bar
const numbers = [12, 54, 45, 98];
let salary = 450;
salary = 455;

// 2.default parameters
function calculateSalary(salary, tax = 0.25, bonus) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string
const elementHTML = `
<div>

<h3>
Name:
</h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)} </p>
<p>Others: ${numbers[2]} </p>
</div>
`

// 4. Arrow function

const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24];

// 6. destructuring
const { x, y, ...c } = { x: 45, y: 12, z: 33, name: 'shakib Al Hasan', salary: 400000 }

