import {SCREEN_WIDTH, ZEPLIN_DEFAULT_WIDTH} from '../constants';

export const calcSize = (size: number) => {
  if (size % 0.5 !== 0) {
    console.warn(
      `calcSize get number which is not integer: '${size}' Check the value for double usage!`,
    );
  }

  return (SCREEN_WIDTH / ZEPLIN_DEFAULT_WIDTH) * size;
};
