const month = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];

const d = new Date();
let monthName = month[d.getMonth()];

function displayMonth() {
    document.getElementById("monthName").innerHTML = monthName;
}
displayMonth();

function prevMonth() {
    // takes the current month local time and goes back a month
    document.getElementById("monthName").innerHTML = month[d.getMonth() - 1]
}

function nextMonth() {
    // takes the current month local time and goes forward a month
    document.getElementById("monthName").innerHTML = month[d.getMonth() + 1];
}