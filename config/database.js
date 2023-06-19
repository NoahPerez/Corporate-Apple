// Update here your DATABASE_NAME, DATABASE_USERNAME & DATABASE_PASSWORD

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'primary.postgres--2hzqdm6jwcpn.addon.code.run'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', '_73f05189477f'),
      user: env('DATABASE_USERNAME', '_ccf6fc489638c235'),
      password: env('DATABASE_PASSWORD', '_8b555cefe14ce8bb159749bc2d5f4d'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
