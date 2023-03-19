import React from "react";
import woman from './images/woman.png'

export const Ask_A_Question = () => {
	return <section className="ask-a-question question">
		<div className="wrapper">
			<div className="question-block">
				<div className="question-block__question-bait">
					<h2 className="question-bait__overhead bait-overhead">Кто будет готовить?</h2>
					<h3 className="question-bait__title bait-title">Лично приготовлю и всё красиво упакую для вашего события</h3>
					<p className="question-bait__sup-title bait-sup">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
				</div>
				<div className="question-block__link-row question-link-row bait-link-row">
					<button className="question-link-row__link bait-link">Загрузить фотографию</button>
				</div>
			</div>
			<div className="question-woman">
				<img src={woman} alt="" />
			</div>
		</div>
	</section>;
};
