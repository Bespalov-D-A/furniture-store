module.exports = {
  htmlmin: {
    collapseWhitespase: true,
  },

  fonter: {
    formats: ['eot'],
  },

  plumber: (notify, title) => {
    return {
      errorHandler: notify.onError((error) => ({
        title,
        message: error.message,
      })),
    }
  },

  webpack: {
    configuration: {
      mode: 'development',
    },
  },

  imagemin: {
    configuration: {
      verbose: true,
    },
  },
}
