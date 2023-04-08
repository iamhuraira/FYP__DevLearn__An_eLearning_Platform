export const getCurrentYearMonthDay = () => {
	const date = new Date();
	const year = date.getFullYear().toString();
	const month = convertNumberToTwoDigitsString(date.getMonth() + 1);
	const day = convertNumberToTwoDigitsString(date.getDate());
	return `${year}-${month}-${day}`;
};

export const getDateYearsFromNow = (yearsFromNow) => {
	const date = new Date();
	return `${
		date.getFullYear() + Number(yearsFromNow)
	}-${convertNumberToTwoDigitsString(
		date.getMonth() + 1
	)}-${convertNumberToTwoDigitsString(date.getDate())}`;
};

export const parseDateFromStore = (storeDate) => {
	const day = convertNumberToTwoDigitsString(Number(storeDate.$D));
	const month = convertNumberToTwoDigitsString(Number(storeDate.$M + 1));
	const year = Number(storeDate.$y).toString();
	return `${year}-${month}-${day}`;
};

const convertNumberToTwoDigitsString = (digit) =>
	digit.toString().length === 1 ? "0" + digit.toString() : digit.toString();