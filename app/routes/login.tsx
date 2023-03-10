// app/routes/logout.tsx
import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';

export async function action({ request }: ActionArgs) {
    return redirect('/');
}

export function loader() {
    throw json({}, { status: 404 });
}