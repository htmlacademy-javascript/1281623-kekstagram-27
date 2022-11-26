const getRandomInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const checkStringLength = (string, length) => string.length <= length;

getRandomInteger();
checkStringLength('');

const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Имя 1',
  'Имя 2',
  'Имя 3',
  'Имя 4',
  'Имя 5',
  'Имя 6',
  'Имя 7',
  'Имя 8',
  'Имя 9',
  'Имя 10',
];

const PICTURES_COUNT = 25;

const UrlNumbers = {
  MIN: 1,
  MAX: 25,
};

const AvatarNumbers = {
  MIN: 1,
  MAX: 6,
};

const CommentsAmount = {
  MIN: 1,
  MAX: 10,
};


const LikesAmount = {
  MIN: 15,
  MAX: 200,
};

const createComment = (_, index) => {
  const Ids = index + 1;

  return {
    id: Ids,
    avatar: `img/avatars-${getRandomInteger(AvatarNumbers.MIN, AvatarNumbers.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = (length) => Array.from({ length }, createComment);

const createPicture = (_, index) => {
  const Ids = index + 1;

  return {
    id: Ids,
    url: `photos/${(Ids)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LikesAmount.MIN, LikesAmount.MAX),
    comments: createComments(getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX)),
  };
};

const pictures = Array.from({ length: PICTURES_COUNT }, createPicture);

// eslint-disable-next-line no-console
console.log(pictures);
