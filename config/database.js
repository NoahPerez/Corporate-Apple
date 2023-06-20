// Update here your DATABASE_NAME, DATABASE_USERNAME & DATABASE_PASSWORD

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'primary.postgres--2hzqdm6jwcpn.addon.code.run'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'teza-api'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// DATABASE-HOST=primary.postgres--2hzqdm6jwcpn.addon.code.run
//  DATABASE-PORT=5432
// ; DATABASE_SLL=true
// ; DATABASE_NAME=_73f05189477f
// ; DATABASE_USERNAME=_ccf6fc489638c235
// ; DATABASE_PASSWORD=_8b555cefe14ce8bb159749bc2d5f4d
