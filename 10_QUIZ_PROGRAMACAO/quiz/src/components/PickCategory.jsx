import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.css";

function PickCategory() {
  const [quizState, dispath] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispath({ type: "START_GAME", payload: category });

    dispath({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo: </p>
      <p>linguagens</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
}

export default PickCategory;
