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
import { useNavigate } from 'react-router-dom';
import { getActualQuestion } from '../../utils/generalMethods';
import Spinner from '../../components/Spinner';
import SurveyQuestion from '../../components/SurveyQuestion';

function GuestSurvey() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [actualQuestion, setActualQuestion] = useState(0);

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
    setIsLoading(false);
  };

  const updateGuest = async (data, nextQuestion: number) => {
    const lsGuestId = localStorage.getItem('guestId');
    await updateGuestData(lsGuestId, data);
    setActualQuestion(nextQuestion);
    setIsLoading(false);
  };

  const createANewGuest = async (email) => {
    const result = await createNewGuest(email);
    if (result.response == RESPONSE_TYPES.OK) {
      localStorage.setItem('guestId', result.data._id);
      setActualQuestion(1);
    }
    setIsLoading(false);
  };

  const getActualQuestionComponent = () => {
    switch (actualQuestion) {
      case 0:
        return (
          <SurveyQuestion
            questionText="¡Hola 🖐🏽!, para poder quien eres necesito que me digas tu email, te notificaremos allí toda la información"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            errorMessage="Parece que no es un email válido... Por favor indicame uno válido ya que te confirmaremos los datos por allí."
            onCompleteFunction={(response) => {
              setIsLoading(true);
              createANewGuest(response);
            }}
          />
        );
        break;
      case 1:
        return (
          <SurveyQuestion
            questionText="¡Genial!, ¿Me puedes decir tu nombre completo?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsLoading(true);
              updateGuest({ completeName: response }, 2);
            }}
          />
        );
        break;
      case 2:
        return (
          <SurveyQuestion
            questionText="¿Podrás acudir a nuestra boda?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                setIsLoading(true);
                updateGuest({ confirmAssistance: true }, 3);
              } else {
                setIsLoading(true);
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
            questionText="¿Tienes alguna intolerancia o alergia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                setIsLoading(true);
                updateGuest({ hasIntolerances: true }, 4);
              } else {
                setIsLoading(true);
                updateGuest({ hasIntolerances: false }, 5);
              }
            }}
          />
        );
        break;
      case 4:
        return (
          <SurveyQuestion
            questionText="Deacuerdo no te preocupes, cuentanos tus intolerancias para poder avisar al catering"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsLoading(true);
              updateGuest({ intolerances: response }, 5);
            }}
          />
        );
        break;
      case 5:
        return (
          <SurveyQuestion
            questionText="Ya casi hemos acabado 💪🏽, ¡dime tu canción favorita a ver si podemos incluirla en la lista!"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsLoading(true);
              updateGuest({ favoriteSong: response }, 6);
            }}
          />
        );
        break;
      case 6:
        return (
          <SurveyQuestion
            questionText="En la medida de lo posible intentaremos proporcionar transporte tanto de ida como de vuelta a la finca, ¿estarías interesado? "
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              setIsLoading(true);
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
        return (
          <SurveyQuestion
            questionText="Por último cuentanos, ¿Traerás acompañante?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              setIsLoading(true);
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
        break;
      case 8:
        return (
          <SurveyQuestion
            questionText="¿Y cómo se llama?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsLoading(true);
              updateGuest({ companionCompleteName: response }, 9);
            }}
          />
        );
        break;
      case 9:
        return (
          <SurveyQuestion
            questionText="¿Tiene alguna alergia o intolerancia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              setIsLoading(true);
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
            questionText="¿Cuales?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              setIsLoading(true);
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
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] flex flex-col items-center justify-center align-middle">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-[80%] flex flex-col gap-3">
          {getActualQuestionComponent()}
        </div>
      )}
    </div>
  );
}

export default GuestSurvey;
