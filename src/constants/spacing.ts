import { calcHeight, calcWidth } from '../helpers/sizes';

const FULL_WIDTH = calcWidth(428);
const FULL_HEIGHT = calcHeight(926);
const INPUT_HEIGHT = calcHeight(50);
const BORDER_RADIUS = calcWidth(10);
const LABEL_SPACING = calcHeight(3);
const MAX_BUTTON_HEIGHT = calcHeight(55);
const MIN_BUTTON_HEIGHT = calcHeight(40);
const BUTTON_WIDTH = calcWidth(177);
const INPUT_BOTTOM_SPACING = calcHeight(21);
const HORIZONTAL_SPACING = calcWidth(20);
const VERTICAL_SPACING = calcHeight(20);
const SMALL_IMAGE_SIZE = calcWidth(13);
const MEDIUM_IMAGE_SIZE = calcWidth(28);
const LARGE_IMAGE_SIZE = calcWidth(40);
const MAIN_PADDING = 15;
const BORDER_WIDTH = 2;
const SQUARE_BUTTON_SIZE = calcWidth(150);

export {
  INPUT_HEIGHT,
  BORDER_RADIUS,
  LABEL_SPACING,
  INPUT_BOTTOM_SPACING,
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
  MAIN_PADDING,
  BORDER_WIDTH,
  MAX_BUTTON_HEIGHT,
  MIN_BUTTON_HEIGHT,
  BUTTON_WIDTH,
  SMALL_IMAGE_SIZE,
  FULL_WIDTH,
  FULL_HEIGHT,
  MEDIUM_IMAGE_SIZE,
  LARGE_IMAGE_SIZE,
  SQUARE_BUTTON_SIZE,
};
