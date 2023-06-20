// Update here your DATABASE_NAME, DATABASE_USERNAME & DATABASE_PASSWORD

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
  },
});

// DATABASE-HOST=primary.postgres--2hzqdm6jwcpn.addon.code.run
//  DATABASE-PORT=5432
// ; DATABASE_SLL=true
// ; DATABASE_NAME=_73f05189477f
// ; DATABASE_USERNAME=_ccf6fc489638c235
// ; DATABASE_PASSWORD=_8b555cefe14ce8bb159749bc2d5f4d
