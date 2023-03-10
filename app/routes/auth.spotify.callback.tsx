// app/routes/auth/spotify.callback.tsx
import type { LoaderArgs } from '@remix-run/node';

import { authenticator } from '~/services/auth.server';

export function loader({ request }: LoaderArgs) {
  return authenticator.authenticate('spotify', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  });
}

export default function MyRouteComponent() {
  return (
    <div>
      <h1>Look ma!</h1>
      <p>I'm still using React after like 8 years.</p>
    </div>
  );
}