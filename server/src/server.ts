import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {
  return 'Olar ';
});

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('🔥Servidor rodando http://localhost:3333');
  });
