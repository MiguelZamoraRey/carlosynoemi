import { useEffect, useState } from 'react';
import {
  createNewGuest,
  getGuestById,
  updateGuestData,
} from '../../services/GuestService';
import {
  GUEST_STATUS,
  QUESTION_TYPE,
  RESPONSE_TYPES,
} from '../../utils/generalTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { getActualQuestion } from '../../utils/generalMethods';
import SurveyQuestion from '../../components/SurveyQuestion';

function GuestSurvey() {
  const { code } = useParams();
  const [hasError, setHasError] = useState(false);
  const [isQuestionHide, setIsQuestionHide] = useState(true);
  const navigate = useNavigate();
  const [actualQuestion, setActualQuestion] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 500);
  }, [isQuestionHide]);

  const getGuest = async (id) => {
    const response = await getGuestById(id);
    if (response.response == RESPONSE_TYPES.OK) {
      if (response.data.status == GUEST_STATUS.COMPLETE) {
        navigate('/landing');
      }
      const actualQuestion = getActualQuestion(response.data);
      setActualQuestion(actualQuestion);
    } else {
      localStorage.clear();
    }
    setIsQuestionHide(false);
  };

  const updateGuest = async (data, nextQuestion: number) => {
    const lsGuestId = localStorage.getItem('guestId');
    await updateGuestData(lsGuestId, data);
    setActualQuestion(nextQuestion);
    setIsQuestionHide(false);
  };

  const createANewGuest = async (email) => {
    const result = await createNewGuest(email);
    if (result.response == RESPONSE_TYPES.OK) {
      localStorage.setItem('guestId', result.data._id);
      setActualQuestion(1);
    } else {
      setHasError(true);
    }
    setIsQuestionHide(false);
  };

  const getActualQuestionComponent = () => {
    switch (actualQuestion) {
      case 0:
        return (
          <SurveyQuestion
            key={1}
            questionText="¡Hola 🖐🏽!, para poder saber quien eres necesito que me digas tu email, te notificaremos allí toda la información"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            hasError={hasError}
            errorMessage="🥲 Parece que no es un email válido... Por favor indícame uno válido ya que te confirmaremos los datos por allí."
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              createANewGuest(response);
            }}
          />
        );
        break;
      case 1:
        return (
          <SurveyQuestion
            key={2}
            questionText="¡Genial!, ¿Me puedes decir tu nombre completo?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              updateGuest({ completeName: response }, 2);
            }}
          />
        );
        break;
      case 2:
        return (
          <SurveyQuestion
            key={3}
            questionText="¿Podrás acudir a nuestra boda?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                setIsQuestionHide(true);
                updateGuest({ confirmAssistance: true }, 3);
              } else {
                setIsQuestionHide(true);
                updateGuest(
                  { confirmAssistance: false, status: GUEST_STATUS.COMPLETE },
                  11
                );
              }
            }}
          />
        );
        break;
      case 3:
        return (
          <SurveyQuestion
            key={4}
            questionText="¿Tienes alguna intolerancia o alergia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                setIsQuestionHide(true);
                updateGuest({ hasIntolerances: true }, 4);
              } else {
                setIsQuestionHide(true);
                updateGuest({ hasIntolerances: false }, 5);
              }
            }}
          />
        );
        break;
      case 4:
        return (
          <SurveyQuestion
            key={5}
            questionText="Deacuerdo no te preocupes, cuéntanos tus intolerancias para poder avisar al catering"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              updateGuest({ intolerances: response }, 5);
            }}
          />
        );
        break;
      case 5:
        return (
          <SurveyQuestion
            key={6}
            questionText="Ya casi hemos acabado 💪🏽, ¡dime tu canción favorita a ver si podemos incluirla en la lista!"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              updateGuest({ favoriteSong: response }, 6);
            }}
          />
        );
        break;
      case 6:
        return (
          <SurveyQuestion
            key={7}
            questionText="En la medida de lo posible intentaremos proporcionar transporte tanto de ida como de vuelta a la finca, ¿estarías interesado? "
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              if (response == 'Sí') {
                updateGuest({ interestedInTransport: true }, 7);
              } else {
                updateGuest({ interestedInTransport: false }, 7);
              }
            }}
          />
        );
        break;
      case 7:
        if (code == 'NYC2025') {
          return (
            <SurveyQuestion
              key={8}
              questionText="Por último cuentanos, ¿Traerás acompañante?"
              type={QUESTION_TYPE.OPTION}
              options={['Sí', 'No']}
              onCompleteFunction={(response) => {
                setIsQuestionHide(true);
                if (response == 'Sí') {
                  updateGuest({ hasCompanion: true }, 8);
                } else {
                  updateGuest(
                    { hasCompanion: false, status: GUEST_STATUS.COMPLETE },
                    11
                  );
                }
              }}
            />
          );
        } else {
          navigate('/landing');
        }
        break;
      case 8:
        return (
          <SurveyQuestion
            key={9}
            questionText="¿Y cómo se llama?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              updateGuest({ companionCompleteName: response }, 9);
            }}
          />
        );
        break;
      case 9:
        return (
          <SurveyQuestion
            key={10}
            questionText="¿Tiene alguna alergia o intolerancia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              if (response == 'Sí') {
                updateGuest({ companionHasIntolerances: true }, 10);
              } else {
                updateGuest(
                  {
                    companionHasIntolerances: false,
                    status: GUEST_STATUS.COMPLETE,
                  },
                  11
                );
              }
            }}
          />
        );
        break;
      case 10:
        return (
          <SurveyQuestion
            key={11}
            questionText="¿Cuales?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsQuestionHide(true);
              updateGuest(
                {
                  companionIntolerances: response,
                  status: GUEST_STATUS.COMPLETE,
                },
                11
              );
            }}
          />
        );
        break;
      case 11:
        navigate('/landing');
        break;
    }
  };

  useEffect(() => {
    const lsGuestId = localStorage.getItem('guestId');
    if (lsGuestId) {
      getGuest(lsGuestId);
    } else {
      setIsQuestionHide(false);
    }
  }, []);

  return (
    <div className="min-h-[100vh] sm:min-w-[900px] max-w-[900px] bg-[#397374] flex flex-col items-center justify-center align-middle">
      <div
        className={`w-[80%] flex flex-col gap-3 transition-opacity duration-[1000ms] ${
          isQuestionHide ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {getActualQuestionComponent()}
      </div>
    </div>
  );
}

export default GuestSurvey;
