import {
  AccessOption,
  AuthorityType,
  CompetitionType,
  FootballPeriodType,
  ParticipantType,
  PasswordPatternGroupType,
  TennisPeriodType,
  TournamentSystemType
} from './model/model';

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
  noTimetableDataMsg: 'noTimetableDataMsg',
  password: 'password',
  half: 'half',
  tennisSet: 'tennisSet',
  generateRound: 'generateRound',
  configuration: 'configuration',
  timetable: 'timetable',
  loggedOut: 'loggedOut',
  loggedOutToken: 'loggedOutToken',
  emptyDatesErrorMsg: 'emptyDatesErrorMsg',
  requiredMinValueErrMsg: 'requiredMinValueErrMsg',
  plannedRounds: 'plannedRounds',
  draw: 'draw',
  selectWinner: 'selectWinner',
  finishGame: 'finishGame',
  finishGameDate: 'finishGameDate',
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
  emptyScheduleMsg: 'emptyScheduleMsg',
  clipboardCopyErrorMsg: 'clipboardCopyErrorMsg',
  join: 'join',
  info: 'info',
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
  result: 'result',
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
  surname: 'surname',
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
  startGame: 'startGame',
  lp: 'lp',
  startGameDate: 'startGameDate',
  confirm: 'confirm',
  cancel: 'cancel',
  begin: 'begin',
  break: 'break',
  finish: 'finish',
  invite: 'invite',
  inviteParticipantsMsg: 'inviteParticipantsMsg',
  tournamentStart: 'tournamentStart',
  tournamentEnd: 'tournamentEnd',
  currentRound: 'currentRound',
  nextOpponent: 'nextOpponent',
  doSearch: 'doSearch',
  table: 'table',
  position: 'position',
  accessNotAllowed: 'accessNotAllowed',
  participant: 'participant',
  owner: 'owner',
  points: 'points',
  winner: 'winner',
  participants: 'participants',
  ACCESS_OPTION: {
    PUBLIC: AccessOption.PUBLIC,
    PRIVATE: AccessOption.PRIVATE
  },
  COMPETITION_TYPE: {
    CHESS: CompetitionType.CHESS,
    FOOTBALL: CompetitionType.FOOTBALL,
    TENNIS: CompetitionType.TENNIS,
    CUSTOM: CompetitionType.CUSTOM
  },
  TOURNAMENT_SYSTEM_TYPE: {
    SWISS: TournamentSystemType.SWISS,
    KNOCKOUT: TournamentSystemType.KNOCKOUT,
    GROUP: TournamentSystemType.GROUP,
    LEAGUE: TournamentSystemType.LEAGUE,
    ROUND_ROBIN: TournamentSystemType.ROUND_ROBIN
  },
  PARTICIPANT_TYPE: {
    SINGLE: ParticipantType.SINGLE,
    TEAM: ParticipantType.TEAM
  },
  AUTHORITY_TYPE: {
    CLI: AuthorityType.CLI
  },
  FOOTBALL_PERIOD_TYPE: {
    FIRST_HALF: FootballPeriodType.FIRST_HALF,
    SECOND_HALF: FootballPeriodType.SECOND_HALF,
  },
  TENNIS_PERIOD_TYPE: {
    FIRST_SET: TennisPeriodType.FIRST_SET,
    SECOND_SET: TennisPeriodType.SECOND_SET,
    THIRD_SET: TennisPeriodType.THIRD_SET,
  },
  PASSWORD_PATTERN_GROUP_TYPE: {
    BIG_LETTER: PasswordPatternGroupType.BIG_LETTER,
    SMALL_LETTER: PasswordPatternGroupType.SMALL_LETTER,
    NUMBER: PasswordPatternGroupType.NUMBER,
    LENGTH_8: PasswordPatternGroupType.LENGTH_8,
  }
};
