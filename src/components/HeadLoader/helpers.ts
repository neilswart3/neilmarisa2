export const pageColor = (path: string): string => {
  let color;

  switch (path) {
    case '/venue':
    case '/our-story':
      color = 'secondary';
      break;
    case '/':
    case '/rsvp':
      color = 'primary';
      break;
    default:
      color = 'primary';
      break;
  }

  return color;
};

export const pageTitle = (path: string): string => {
  let title;

  switch (path) {
    case '/':
      title = '';
      break;
    case '/venue':
      title = 'Venue | ';
      break;
    case '/our-story':
      title = 'Our Story | ';
      break;
    case '/rsvp':
      title = 'RSVP | ';
      break;
    default:
      title = '';
      break;
  }

  return title;
};
