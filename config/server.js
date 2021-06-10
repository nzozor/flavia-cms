module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  // url: 'https://cms.tracksdigital.com',
  // url: 'http://192.168.1.203',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd6375c783d627a984e5447245340dd6d'),
    },
  },
});
