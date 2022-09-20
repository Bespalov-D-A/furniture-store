module.exports = {
  htmlmin: {
    collapseWhitespase: true,
  },

  plumber: (notify) => {
    return {
      errorHandler: notify.onError((error) => ({
        title: "HTML",
        message: error.message,
      })),
    };
  },

  webpack: {
    configuration: {
      mode: "development"
    }
    
  },

  imagemin: {
    configuration: {
      verbose: true
    }
  }
};
