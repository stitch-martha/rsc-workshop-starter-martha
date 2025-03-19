'use client'
import React, { useOptimistic } from 'react';


import { favoriteContact } from '@/data/actions/updateFavourite';
import { cn } from '@/utils/cn';
import type { Contact } from '@prisma/client';

export default function Favorite({ contact }: { contact: Contact }) {
  const [optimisticFavorite, setOptimisticFavorite] = useOptimistic(contact.favorite);



  return (
    <form       action={async () => {
      setOptimisticFavorite(!optimisticFavorite);
      await favoriteContact(contact.id, contact.favorite);
    }} className="flex">
    <button
      className={cn(
        optimisticFavorite ? 'text-yellow-500' : 'text-gray-dark',
        'flex text-2xl font-normal shadow-none hover:text-yellow-400 hover:shadow-none',
      )}
      aria-label={optimisticFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {optimisticFavorite ? '★' : '☆'}
    </button>
    </form>
  );
}
