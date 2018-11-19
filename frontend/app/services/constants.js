import Service from'@ember/service';
import config from '../config/environment';

export default Service.extend({
  rootURL: config.rootURL
});
