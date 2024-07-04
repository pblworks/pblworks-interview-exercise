import { EditProjectForm } from '@/app/projects/[projectId]/components/EditProjectForm/EditProjectForm'
import { prisma } from '@/prisma/prisma'
import { Stack } from '@mui/material'
import { Prisma } from '@prisma/client'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: { projectId: string }
}) {
  const id = parseInt(params.projectId)

  const project = await prisma.project.findUnique({
    where: { id },
  })

  if (!project) {
    return notFound()
  }

  return <EditProjectForm project={project} />
}
