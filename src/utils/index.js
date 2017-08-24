import qs from 'qs';

export function parseUrlQuery(location: Object) {
  return qs.parse(location.search.substring(1));
}
