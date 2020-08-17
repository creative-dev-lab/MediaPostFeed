/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/17/2020
 */


/**
* Description: Instagram Feed api key and url
* 
*/
export const INSTA_END_POINT = 'https://api.instagram.com';
export const INSTA_URL = `${INSTA_END_POINT}/auth/`;
// Dribbble only supports on Web version, not able to get Access Token
// ToDo: This Token is fetched manually from web, will be expired soon, will need to wait for the mobile version for token generation
export const INSTA_APP_ID = '316410852911494';
export const INSTA_CLIENT_SECRET = 'd34947ff80f3d052a700ea81ded0d373';
export const INSTA_TOKEN = '';


/**
* Description: Behance Feed api key and url
* 
*/
export const BE_API_KEY = 'ugCqRrCuAuHAD6gvDTmegYXLxO2lWVca';
export const BE_END_POINT = 'https://api.behance.net';
export const BE_URL = `${BE_END_POINT}/v2/projects/?api_key=${BE_API_KEY}&per_page=4&page=`;

/**
* Description: Dribbble Feed api key and url
* 
*/
export const DRB_CLIENT_ID = 'b20ebe107e6c79696509ab6d8f39c80fe52b09ded30e55336347fa787a605900';
export const DRB_CLIENT_SECRET = 'dbb80c2243d87ea13fe866966d4484be292ad3b1e6b670d724b4557a6838d421';
// Dribbble only supports on Web version, not able to get Access Token
// ToDo: This Token is fetched manually from web, will be expired soon, will need to wait for the mobile version for token generation
export const DRB_TOKEN = 'c1d72c9e2052aca23c670ad3f53e144d8d440790c43ed00e48edee574638d49d';
export const DRB_END_POINT = 'https://api.dribbble.com';