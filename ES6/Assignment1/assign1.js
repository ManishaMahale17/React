
window.onload = function () {
    var dateBtn = document.getElementById("dateBtn");
    dateBtn.addEventListener('click', function () {
        var fromD = document.getElementById("fromDate");
        var toD = document.getElementById("toDate");
        var fromT = document.getElementById("fromTime").value;
        var toT = document.getElementById("toTime").value;
        var toDate = Date.parse(toD.value)
        var fromDate = Date.parse(fromD.value)
        // --------------------
        var toDatee = new Date(toDate)
        var fromDatee = new Date(fromDate)
        var toDateArr = toDatee.toString().split(" ");;
        var fromDateArr = fromDatee.toString().split(" ");
        var yearDifference = toDateArr[3] - fromDateArr[3];
        var toMonthString = toDateArr[1];
        var fromMonthString = fromDateArr[1];
        var toMonthNumber = 0;
        var fromMonthNumber = 0;
        var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        for (var i = 0; i <= monthsArr.length; i++) {
            if (toMonthString == monthsArr[i]) {
                toMonthNumber = (i + 1);
            }
            if (fromMonthString == monthsArr[i]) {
                fromMonthNumber = (i + 1);
            }
        }
        var monthDifference = toMonthNumber - fromMonthNumber;
        if (monthDifference < 0) {
            monthDifference = 12 + monthDifference;
        }
        var dateDifference = toDateArr[2] - fromDateArr[2];

        var toTime = toT.split(":");
        var fromTime = fromT.split(":");
        var minutesDifference = toTime[1] - fromTime[1];
        var hourDifference = toTime[0] - fromTime[0];
        if (minutesDifference < 0) {
            hourDifference--;
            minutesDifference = 60 + minutesDifference;
        }
        var totalHours = difference / (1000 * 60 * 60) + hourDifference

        var difference = Math.abs(toDate - fromDate);

        if (totalHours >= 24) {
            var daysFromHr = Math.round(totalHours / 24);
            var leftHrs = totalHours - (daysFromHr * 24);
        }
        var roundHr = Math.round(difference / (1000 * 60 * 60 * 24));
        var monthsLeft = 0;
        var remainingDays = 0;
        if (daysFromHr > 30) {
            monthsLeft = (daysFromHr % 30);
            remainingDays = Math.round(daysFromHr / 30);
        }
        var totalMonths = difference / (1000 * 60 * 60 * 24 * 12);
        totalMonths = Math.round(totalMonths);
        var result = document.getElementById("dvStatus");
        result.innerHTML = 'Difference= ' + yearDifference + ' Years, ' + monthDifference + ' Months, ' + dateDifference + ' Days, ' + hourDifference + ' Hours, ' + minutesDifference + ' Minutes';


    }, false);

};
