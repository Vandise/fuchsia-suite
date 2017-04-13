import Q from "q";
// eslint-disable-next-line no-unused-vars
import qXhr from 'q-xhr';
import settings from "../../../settings.json";

export const getConfigSettings = () => {
  return Q.xhr.get(`${settings.cdn}${settings.config_file}`).then(resp => resp.data);
}