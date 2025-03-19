import 'server-only'
import { prisma } from '@/db';

export async function getContacts() {
  return await prisma.contact.findMany({
    orderBy: [{first: 'asc'}, {last: 'asc'}],
  });
}