'server-only';
import { notFound } from 'next/navigation';
import { prisma } from '@/db';

export async function getContact(contactId: string) {
  const contact = await prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    // This is a specific nextjs function that will catch within an error boundary
    notFound()
  }

  return contact;
}