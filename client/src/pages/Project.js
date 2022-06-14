import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import DeleteProjectButton from '../components/DeleteProjectButton'
import EditProjectForm from '../components/EditProjectForm'
import { GET_PROJECT} from '../queries/projectQueries'
import ClientInfo from '../components/ClientInfo'

export default function Project() {
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_PROJECT, 
        {variables: {id}})
    if (loading) return <p>Loading...</p>;
    if (error) return <p>something went wrong ...</p>;
  return (
    <>
    <div>
      <h1>test</h1>
    </div>
    {!loading && !error && (
        <div>
            <Link to='/'>Back</Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <p>{data.project.status}</p>
            <ClientInfo client={data.project.client} />
            <EditProjectForm project={data.project} />

            <DeleteProjectButton projectId={data.project.id} />
          
            
        </div>
    )}
    </>
  )
}
