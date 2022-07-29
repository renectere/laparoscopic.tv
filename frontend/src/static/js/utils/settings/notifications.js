let NOTIFICATIONS = null;

export function init(settings) {
  NOTIFICATIONS = {
    messages: {
      addToLiked: 'Aggiunto ai media piaciuti',
      removeFromLiked: 'Rimosso dai media preferiti',
      addToDisliked: 'Aggiunto ai media non mi piace',
      removeFromDisliked: 'Rimosso dai media non mi piace',
    },
  };

  let k, g;

  if (void 0 !== settings) {
    for (k in NOTIFICATIONS) {
      if (void 0 !== settings[k]) {
        if ('messages' === k) {
          for (g in NOTIFICATIONS[k]) {
            if ('string' === typeof settings[k][g]) {
              NOTIFICATIONS[k][g] = settings[k][g];
            }
          }
        }
      }
    }
  }
}

export function settings() {
  return NOTIFICATIONS;
}
