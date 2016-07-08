


const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
  	"July",
  	"August",
  	"September",
  	"October",
  	"November",
  	"December"
];

export const formattedDate =  (string) => {
	let date = new Date(string);
	return months[date.getMonth()] + " " + date.getFullYear();
}

export const shortenIfLengthLarger = (text, length) => {
	if (text.length > length)
	{
		return  text.slice(0, length) + "...";
	}
	else
	{
		return text;
	}
}