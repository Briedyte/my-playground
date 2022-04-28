const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hoc": path.resolve(__dirname, "src/hoc"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@images": path.resolve(__dirname, "src/images"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
