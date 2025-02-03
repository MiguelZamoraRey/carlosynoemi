/* eslint-disable @typescript-eslint/no-explicit-any */
export enum DAY_TO_COME {
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}

export enum GUEST_STATUS {
  PENDING = 'PENDING',
  INCOMPLETE = 'INCOMPLETE',
  COMPLETE = 'COMPLETE',
}

export enum RESPONSE_TYPES {
  BAD_REQUEST = 'BadRequest',
  NOT_FOUND = 'NotFound',
  OK = 'Ok',
  INTERNAL_SERVER_ERROR = 'InternalServerError',
}

export enum QUESTION_TYPE {
  FREE_TEXT = 'FreeText',
  OPTION = 'Option',
}

export interface IGuest {
  _id: string;
  email: string;
  completeName: string;
  confirmAssistance: boolean;
  hasIntolerances: boolean;
  intolerances: string;
  firstDay: DAY_TO_COME;
  favoriteSong: string;
  interestedInTransport: boolean;
  hasCompanion: boolean;
  companionCompleteName: string;
  companionHasIntolerances: boolean;
  companionIntolerances: string;
  status: GUEST_STATUS;
}

export interface IApiResponse {
  response: RESPONSE_TYPES;
  data: any;
}
