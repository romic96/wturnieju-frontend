import {
  ACCESS_OPTION,
  AuthorityType,
  CompetitionType,
  TOURNAMENT_PARTICIPANT_TYPE,
  TournamentSystemType
} from './model/model';
import {toDate} from '@angular/common/src/i18n/format_date';

export const LocaleMessages = {
  add: 'add',
  hello: 'hello',
  login: 'login',
  polish: 'polish',
  startTypingCommand: 'startTypingCommand',
  englishUs: 'englishUs',
  start: 'start',
  cli: 'cli',
  email: 'email',
  password: 'password',
  generateRound: 'generateRound',
  configuration: 'configuration',
  timetable: 'timetable',
  emptyDatesErrorMsg: 'emptyDatesErrorMsg',
  changeEmailForm: 'changeEmailForm',
  acceptedParticipants: 'acceptedParticipants',
  invitedParticipants: 'invitedParticipants',
  refusedParticipants: 'refusedParticipants',
  accepted: 'accepted',
  copyInvitationLink: 'copyInvitationLink',
  invitationVerificationMsg: 'invitationVerificationMsg',
  tournamentParticipationRequestMsg: 'tournamentParticipationRequestMsg',
  acceptTournamentInvitationMsg: 'acceptTournamentInvitationMsg',
  discardTournamentInvitationMsg: 'discardTournamentInvitationMsg',
  clipboardCopySuccessMsg: 'clipboardCopySuccessMsg',
  clipboardCopyErrorMsg: 'clipboardCopyErrorMsg',
  join: 'join',
  discard: 'discard',
  userParticipateErrorMsg: 'userParticipateErrorMsg',
  invitationLink: 'invitationLink',
  redirectErrorMsg: 'redirectErrorMsg',
  removed: 'removed',
  edit: 'edit',
  resultEdit: 'resultEdit',
  stats: 'stats',
  schedule: 'schedule',
  results: 'results',
  wantToJoinParticipants: 'wantToJoinParticipants',
  forgetPasswordSuccessMsg: 'forgetPasswordSuccessMsg',
  changePasswordForm: 'changePasswordForm',
  newEmail: 'newEmail',
  incorrectPassword: 'incorrectPassword',
  changeEmailSuccessMsg: 'changeEmailSuccessMsg',
  round: 'round',
  registration: 'registration',
  forgetPassword: 'forgetPassword',
  homePage: 'homePage',
  remind: 'remind',
  requiredError: 'requiredError',
  badEmailError: 'badEmailError',
  repeatPassword: 'repeatPassword',
  passwordPatternError: 'passwordPatternError',
  newPassword: 'newPassword',
  loading: 'loading',
  accountVerificationErrorMsg: 'accountVerificationErrorMsg',
  accountVerificationSuccessMsg: 'accountVerificationSuccessMsg',
  emailVerificationErrorMsg: 'emailVerificationErrorMsg',
  emailVerificationSuccessMsg: 'emailVerificationSuccessMsg',
  oldPassword: 'oldPassword',
  incorrectOldPassword: 'incorrectOldPassword',
  changePasswordSuccess: 'changePasswordSuccess',
  minLengthError: 'minLengthError',
  differentPasswordsError: 'differentPasswordsError',
  createAccount: 'createAccount',
  close: 'close',
  makeLogin: 'makeLogin',
  accountCreated: 'accountCreated',
  unknownError: 'unknownError',
  serviceUnavailableErrorMsg: 'serviceUnavailableErrorMsg',
  emailExists: 'emailExists',
  loginError: 'loginError',
  accountInactiveErrorMsg: 'accountInactiveErrorMsg',
  logout: 'logout',
  totalGames: 'totalGames',
  loses: 'loses',
  wins: 'wins',
  draws: 'draws',
  smallPoints: 'smallPoints',
  remindPassword: 'remindPassword',
  send: 'send',
  register: 'register',
  remember: 'remember',
  success: 'success',
  account: 'account',
  personalData: 'personalData',
  firstName: 'firstName',
  secondName: 'secondName',
  birthDate: 'birthDate',
  back: 'back',
  forward: 'forward',
  name: 'name',
  accessOption: 'accessOption',
  fromDate: 'fromDate',
  toDate: 'toDate',
  place: 'place',
  description: 'description',
  minParticipants: 'minParticipants',
  maxParticipants: 'maxParticipants',
  competition: 'competition',
  tournamentSystem: 'tournamentSystem',
  end: 'end',
  participantType: 'participantType',
  tournamentCreatorFormErrorMsg: 'tournamentCreatorFormErrorMsg',
  badValueError: 'badValueError',
  tournamentCreatorSuccessMsg: 'tournamentCreatorSuccessMsg',
  myTournaments: 'myTournaments',
  inProgress: 'inProgress',
  ended: 'ended',
  beforeStart: 'beforeStart',
  lp: 'lp',
  confirm: 'confirm',
  cancel: 'cancel',
  invite: 'invite',
  inviteParticipantsMsg: 'inviteParticipantsMsg',
  tournamentStart: 'tournamentStart',
  tournamentEnd: 'tournamentEnd',
  currentRound: 'currentRound',
  nextOpponent: 'nextOpponent',
  doSearch: 'doSearch',
  table: 'table',
  position: 'position',
  points: 'points',
  winner: 'winner',
  participants: 'participants',
  ACCESS_OPTION: {
    PUBLIC: ACCESS_OPTION.PUBLIC,
    PRIVATE: ACCESS_OPTION.PRIVATE
  },
  COMPETITION_TYPE: {
    CHESS: CompetitionType.CHESS
  },
  TOURNAMENT_SYSTEM_TYPE: {
    SWISS: TournamentSystemType.SWISS
  },
  TOURNAMENT_PARTICIPANT_TYPE: {
    SINGLE: TOURNAMENT_PARTICIPANT_TYPE.SINGLE,
    TEAM: TOURNAMENT_PARTICIPANT_TYPE.TEAM
  },
  AUTHORITY_TYPE: {
    CLI: AuthorityType.CLI
  }
};
