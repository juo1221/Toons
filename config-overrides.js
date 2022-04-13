const { alias } = require("react-app-rewire-alias");

// 사용자 정의 webpack 설정

module.exports = function override(config) {
  alias({
    "@hooks": "src/hooks",
    "@utils": "src/utils",
  })(config);

  return config;
};
