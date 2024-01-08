export const timeFormatter = (time) => {
	const minutes = Math.floor(time / (100 * 60));
	const seconds = Math.floor((time % 6000) / 100);
	const centiseconds = Math.floor((time % 6000) % 100);

	return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(
		2,
		"0"
	)} : ${String(centiseconds).padStart(2, "0")}`;
};
