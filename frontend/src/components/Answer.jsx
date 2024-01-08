const Answer = ({ answer, handleAnswerChecker }) => {
	return (
		<li onClick={() => handleAnswerChecker(answer.id)}>
			<img src={answer.imgUrl} alt={answer.name} />
			{answer.name}
		</li>
	);
};
export default Answer;
