import React from 'react'
import { GET_PROJECT } from '../queries/projectQueries'
import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../mutations/projectMutations'

export default function DeleteProjectButton( {projectId} ) {
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        refetchQueries: [{ query: GET_PROJECT }]
    })


  return (
    <div>
        <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}
