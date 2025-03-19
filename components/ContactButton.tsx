import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/utils/cn';
import { routes, useSafeSearchParams } from '@/validations/routeSchema';
import type { Contact } from '@prisma/client';

export default function ContactButton({ contact }: { contact: Contact }) {
  // We don't need to mark this as 'use client' because we are importing it only in the ContactList, a client component
  const { q } = useSafeSearchParams('home')
  const pathName = usePathname()
  const isActive = pathName.includes(`contacts/${contact.id}`);

  return (
    <Link
      className={cn(
        isActive ? 'bg-primary text-white' : 'hover:bg-gray',
        'flex w-full items-center justify-between gap-4 overflow-hidden whitespace-pre rounded-lg p-2 hover:no-underline',
      )}
      href={routes.contactId({contactId: contact.id, search: q? {q} : undefined})}
    >
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i className={cn(isActive ? 'text-white' : 'text-gray-500')}>No Name</i>
      )}
      {contact.favorite ? (
        <span className={cn('float-right', isActive ? 'text-white' : 'text-yellow-500')}>★</span>
      ) : null}
    </Link>
  );
}
