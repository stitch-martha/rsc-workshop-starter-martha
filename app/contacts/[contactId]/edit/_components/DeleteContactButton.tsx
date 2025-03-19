'use client'
import React from 'react'

import SubmitButton from '@/components/ui/SubmitButton'
import { deleteContact } from '@/data/actions/deleteContact'

export default function DeleteContactButton({contactId}: {contactId: string}) {

  return (
    <form action={
       ()=> {
        const response = confirm('Are you sure you want to delete this contact?')
        if (response) {
            deleteContact(contactId)
        }
      }
    }>
      <SubmitButton
          type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  )
}
