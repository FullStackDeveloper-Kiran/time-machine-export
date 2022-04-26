function setProp(p, n) {
	document.body.style.setProperty(p, n);
}

const d = new Date();
var day = '' + d.getDate();
var month = d.getMonth();
var year = '' + d.getFullYear();



if(day < 10) {
	setProp("--day1", 0);
	setProp("--day2", day);
} else {
	setProp("--day1", day[0]);
	setProp("--day2", day[1]);
}

setProp("--month", month);

setProp("--year1", year[0]);
setProp("--year2", year[1]);
setProp("--year3", year[2]);
setProp("--year4", year[3]);