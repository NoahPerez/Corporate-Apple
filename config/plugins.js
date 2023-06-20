module.exports = ({ env }) => ({
    // Update here your cloudinary cloud_name, api_key & api_secret
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: "dvb0ear4g",
          api_key: "963382675663274",
          api_secret: "RZ_TzhFGV18tGjhCAhK3lY-jBTA",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '9d',
          jwtSecret: env('JWT_SECRET'),
        },
      },
    },
  });

