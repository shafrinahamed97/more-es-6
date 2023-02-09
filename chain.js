const users = [
    {
        id: 1, name: 'Aboul', job: 'Doctor'
    }
]

// console.log(users[0].name);
const data = {
    count: 500,
    data: [
        {
            id: 1, name: 'Babul', job: 'leader'
        },
        {
            id: 2, name: 'Dabul', job: 'leader'
        }
    ]
}
const firstJob = data.data[0].job;
const user = {
    id: 501,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/A Kocukhet lane',
            second: 'third Floor',
            third: 'right side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);

