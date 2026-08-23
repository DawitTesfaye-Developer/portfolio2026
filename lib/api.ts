export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function sendContactMessage(payload: ContactPayload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = data?.message ?? 'Something went wrong. Please try again.';
    const errors = data?.errors as Record<string, string[]> | undefined;
    throw new Error(errors ? Object.values(errors).flat().join(' ') : message);
  }

  return data;
}
