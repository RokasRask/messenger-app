import { format, isToday, isYesterday, isThisWeek, isThisYear } from 'date-fns';
import { lt } from 'date-fns/locale';

// Formatuoti žinutės datą pagal kontekstą
export const formatMessageDate = (timestamp) => {
  const date = new Date(timestamp);
  
  if (isToday(date)) {
    return format(date, 'HH:mm', { locale: lt });
  } else if (isYesterday(date)) {
    return 'Vakar ' + format(date, 'HH:mm', { locale: lt });
  } else if (isThisWeek(date)) {
    return format(date, 'EEEE, HH:mm', { locale: lt });
  } else if (isThisYear(date)) {
    return format(date, 'MMM d, HH:mm', { locale: lt });
  } else {
    return format(date, 'yyyy-MM-dd HH:mm', { locale: lt });
  }
};

// Formatuoti pokalbio sąrašo datą
export const formatChatListDate = (timestamp) => {
  const date = new Date(timestamp);
  
  if (isToday(date)) {
    return format(date, 'HH:mm', { locale: lt });
  } else if (isYesterday(date)) {
    return 'Vakar';
  } else if (isThisWeek(date)) {
    return format(date, 'EEEE', { locale: lt });
  } else if (isThisYear(date)) {
    return format(date, 'MMM d', { locale: lt });
  } else {
    return format(date, 'yyyy-MM-dd', { locale: lt });
  }
};