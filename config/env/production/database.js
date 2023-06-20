module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-51.railway.app'),
      port: env.int('PGPORT', 7810),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '73Nju41TCfWVBiL2cG35'),
      ssl: env.bool(true),
    },
  },
});
