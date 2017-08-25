import qs from 'qs';

/**
 * Parse all URL search query parameters (as of v4 of react-router
 * search is not parsed by default)
 *
 * @param {ReactRouterLocation} location
 * @return {Object} - map URL query keys to values
 */
export function parseUrlQuery(location: Object): Object {
  return qs.parse(location.search.substring(1));
}
