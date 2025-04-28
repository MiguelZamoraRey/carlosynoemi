import { useEffect, useState } from 'react';
import { getGuestById, updateGuestData } from '../../services/GuestService';
import {
  GUEST_STATUS,
  QUESTION_TYPE,
  RESPONSE_TYPES,
} from '../../utils/generalTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { getActualQuestion } from '../../utils/generalMethods';
import SurveyQuestion from '../../components/SurveyQuestion';
import { motion } from 'framer-motion';

function GuestSurvey() {
  const { guestId } = useParams();
  const [isQuestionHide, setIsQuestionHide] = useState(false);
  const navigate = useNavigate();
  const [actualQuestion, setActualQuestion] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 500);
    if (!guestId) {
      navigate('/');
    }
  }, []);

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
    setIsQuestionHide(true);
    await updateGuestData(lsGuestId, data);
    setTimeout(() => {
      setActualQuestion(nextQuestion);
      setIsQuestionHide(false);
    }, 1000);
  };

  const getActualQuestionComponent = () => {
    switch (actualQuestion) {
      case 1:
        return (
          <SurveyQuestion
            key={1}
            questionText="¡Hola! ¿Cómo te llamas? (Introduce tu nombre y apellidos)"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest({ completeName: response }, 2);
            }}
          />
        );
        break;
      case 2:
        return (
          <SurveyQuestion
            key={2}
            questionText="Aquí viene la gran pregunta, ¿podrás acudir a nuestra boda?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                updateGuest({ confirmAssistance: true }, 3);
              } else {
                updateGuest(
                  { confirmAssistance: false, status: GUEST_STATUS.COMPLETE },
                  15
                );
              }
            }}
          />
        );
        break;
      case 3:
        return (
          <SurveyQuestion
            key={3}
            questionText="¡Vale!, ¿Tienes alguna intolerancia o alergia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              console.log(response);
              if (response == 'Sí') {
                updateGuest({ hasIntolerances: true }, 4);
              } else {
                updateGuest({ hasIntolerances: false }, 5);
              }
            }}
          />
        );
        break;
      case 4:
        return (
          <SurveyQuestion
            key={4}
            questionText="Cuéntanos qué necesidades tienes para avisar al catering"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest({ intolerances: response }, 5);
            }}
          />
        );
        break;
      case 5:
        return (
          <SurveyQuestion
            key={5}
            questionText="Seguimos, ¿Traerás acompañante?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              if (response == 'Sí') {
                updateGuest({ hasCompanion: true }, 6);
              } else {
                updateGuest(
                  { hasCompanion: false, status: GUEST_STATUS.COMPLETE },
                  9
                );
              }
            }}
          />
        );
        break;
      case 6:
        return (
          <SurveyQuestion
            key={6}
            questionText="¿Cómo se llama?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest({ companionCompleteName: response }, 7);
            }}
          />
        );
        break;
      case 7:
        return (
          <SurveyQuestion
            key={7}
            questionText="¿Tiene alguna alergia o intolerancia?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              if (response == 'Sí') {
                updateGuest({ companionHasIntolerances: true }, 8);
              } else {
                updateGuest(
                  {
                    companionHasIntolerances: false,
                    status: GUEST_STATUS.COMPLETE,
                  },
                  9
                );
              }
            }}
          />
        );
        break;
      case 8:
        return (
          <SurveyQuestion
            key={8}
            questionText="¿Cuales?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest(
                {
                  companionIntolerances: response,
                  status: GUEST_STATUS.COMPLETE,
                },
                9
              );
            }}
          />
        );
        break;
      case 9:
        return (
          <SurveyQuestion
            key={9}
            questionText="¿Van a venir niños contigo?"
            type={QUESTION_TYPE.OPTION}
            options={['Sí', 'No']}
            onCompleteFunction={(response) => {
              if (response == 'Sí') {
                updateGuest({ hasChilds: true }, 10);
              } else {
                updateGuest(
                  {
                    hasChilds: false,
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
            key={10}
            questionText="¿Cómo se llaman?"
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest({ childNames: response }, 11);
            }}
          />
        );
        break;
      case 11:
        return (
          <SurveyQuestion
            key={11}
            questionText="¿Vas a querer venir en autobús? Cuando nos confirméis quienes están interesados publicaremos toda la información en la página web"
            type={QUESTION_TYPE.OPTION}
            options={['Si, ida y vuelta', 'No, voy por mi cuenta']}
            onCompleteFunction={(response) => {
              if (response == 'Sí') {
                updateGuest({ interestedInTransport: true }, 12);
              } else {
                updateGuest({ interestedInTransport: false }, 12);
              }
            }}
          />
        );
        break;
      case 12:
        return (
          <SurveyQuestion
            key={12}
            questionText="Por último 💪🏽, ¡Dime tu canción favorita! Con un poco de suerte podrás escucharla en la boda."
            type={QUESTION_TYPE.FREE_TEXT}
            options={null}
            onCompleteFunction={(response) => {
              updateGuest({ favoriteSong: response }, 15);
            }}
          />
        );
        break;
      case 15:
        navigate('/landing');
        break;
    }
  };

  useEffect(() => {
    const lsGuestId = localStorage.getItem('guestId');
    if (lsGuestId) {
      getGuest(lsGuestId);
    }
  }, []);

  return (
    <div className="flex place-content-center">
      <div className="min-h-[100vh] min-w-[100vw] sm:min-w-[900px] max-w-[900px]  flex flex-col items-center justify-center align-middle z-12">
        <motion.div
          className={`w-[80%] flex flex-col gap-3`}
          initial={isQuestionHide ? { opacity: 1 } : { opacity: 0 }}
          animate={isQuestionHide ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {getActualQuestionComponent()}
        </motion.div>
      </div>
    </div>
  );
}

export default GuestSurvey;
