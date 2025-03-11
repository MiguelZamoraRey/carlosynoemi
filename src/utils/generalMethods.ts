export const getActualQuestion = (guest): number => {
  let actualQuestion = 0;
  if (guest.email != undefined && guest.email != null) {
    actualQuestion++;
  }
  if (guest.completeName != undefined && guest.completeName != null) {
    actualQuestion++;
  }
  if (guest.confirmAssistance != undefined && guest.confirmAssistance != null) {
    actualQuestion++;
  }
  if (guest.hasIntolerances != undefined && guest.hasIntolerances != null) {
    actualQuestion++;
  }
  if (guest.intolerances != undefined && guest.intolerances != null) {
    actualQuestion++;
  }
  if (guest.firstDay != undefined && guest.firstDay != null) {
    actualQuestion++;
  }
  if (guest.favoriteSong != undefined && guest.favoriteSong != null) {
    actualQuestion++;
  }
  if (
    guest.interestedInTransport != undefined &&
    guest.interestedInTransport != null
  ) {
    actualQuestion++;
  }
  if (guest.hasCompanion != undefined && guest.hasCompanion != null) {
    if (guest.hasCompanion == false) {
      actualQuestion = 11;
    } else {
      actualQuestion++;
    }
  }

  if (
    guest.companionCompleteName != undefined &&
    guest.companionCompleteName != null
  ) {
    if (guest.hasCompanion == false) {
      actualQuestion = 11;
    } else {
      actualQuestion++;
    }
  }
  if (
    guest.companionHasIntolerances != undefined &&
    guest.companionHasIntolerances != null
  ) {
    if (guest.hasCompanion == false) {
      actualQuestion = 11;
    } else {
      actualQuestion++;
    }
  }
  if (
    guest.companionIntolerances != undefined &&
    guest.companionIntolerances != null
  ) {
    if (guest.hasCompanion == false) {
      actualQuestion = 11;
    } else {
      actualQuestion++;
    }
  }

  return actualQuestion;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
