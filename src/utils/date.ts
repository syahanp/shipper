import {
  format as fnsFormat,
  isValid,
} from 'date-fns';
import { id } from 'date-fns/locale';

// Default option being passed to date-fns
const defaultFnsOptions = {
  locale: id,
};

/**
 * Format date object into desired time format output
 * @see https://date-fns.org/v2.14.0/docs/format
 */
const formatDate = (
  date: Date | number,
  formatString: string,
): string => {
  if (isValid(date)) {
    return fnsFormat(date, formatString, {
      ...defaultFnsOptions,
    });
  }

  return '';
}

export default formatDate;