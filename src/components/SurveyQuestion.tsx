import { useState } from 'react';
import { QUESTION_TYPE } from '../utils/generalTypes';

interface SurveyQuestionProps {
  questionText: string;
  type: QUESTION_TYPE;
  options: string[] | null;
  errorMessage?: string | null;
  onCompleteFunction: (response) => void;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  questionText,
  type,
  options,
  // errorMessage,
  onCompleteFunction,
}) => {
  const [response, setResponse] = useState(null);
  return (
    <div className="w-full flex flex-col justify-center align-middle gap-5">
      <div className="w-[full] flex align-middle bg-transparent rounded-lg text-white text-4xl">
        <span>{questionText}</span>
      </div>
      <div className="w-[100%] flex flex-col align-middle gap-5 ">
        {type == QUESTION_TYPE.FREE_TEXT ? (
          <>
            <input
              type="text"
              className="bg-white rounded-lg text-black p-6 w-[100%] text-2xl border-none focus:border-none focus-visible:border-none"
              onChange={(e) => setResponse(e.target.value)}
            />
            <button
              className=" border border-shote rounded-lg w-[100%]  hover:bg-white hover:text-[#397374] p-4 text-2xl"
              onClick={() => onCompleteFunction(response)}
            >
              Enviar respuesta
            </button>
          </>
        ) : (
          <div className="w-[100%] flex flex-row justify-between align-middle gap-5 ">
            {options.map((op) => (
              <button
                className="w-[40%] text-2xl border border-white text-white rounded-xl p-4 hover:bg-white hover:text-[#397374]"
                onClick={() => onCompleteFunction(op)}
              >
                {op}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestion;
