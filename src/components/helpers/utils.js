const utils = {
  delay: function(t) {
	  return new Promise(resolve => setTimeout(resolve, t));
  }
};

export default utils
