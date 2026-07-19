// utils/trackInterest.js
export function trackInterest(itemName, itemType, extra) {
  if (typeof window === 'undefined' || typeof window.umami === 'undefined') return;

  var data = {
    item: itemName,
    type: itemType || 'unknown'
  };

  if (extra && typeof extra === 'object') {
    for (var key in extra) {
      if (extra.hasOwnProperty(key)) {
        data[key] = extra[key];
      }
    }
  }

  window.umami.track('interest-tagged', data);
}