'use server'

import { prisma } from '@/prisma/prisma'
import { revalidatePath } from 'next/cache'

export const createEmptyProject = async () => {
  const project = await prisma.project.create({})
  revalidatePath('/projects')

  return project
}
