//* LIBRARY
import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
import { swagger } from '@elysiajs/swagger';

//* CONFIGS
import selectedConfig from '@/configs/config.app';

// Todo: configs
const {
  app: { port },
} = selectedConfig;

const app = new Elysia();

app.use(cors());
app.use(helmet());
app.use(
  swagger({
    path: '/v1/swagger',
    documentation: {
      info: {
        title: 'Backend Bun Js Documentation',
        version: '1.0.0',
      },
    },
  }),
);

// Todo: Run Port
app.listen(port, () => {
  console.info(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
  );
});
