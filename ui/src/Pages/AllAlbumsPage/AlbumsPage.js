import React from 'react'
import AlbumBoxes from '../../components/albumGallery/AlbumBoxes'
import Layout from '../../Layout'
import { useQuery, gql } from '@apollo/client'

const getAlbumsQuery = gql`
  query getMyAlbums {
    myAlbums(filter: { order_by: "title" }, onlyRoot: true, showEmpty: true) {
      id
      title
      thumbnail {
        thumbnail {
          url
        }
      }
    }
  }
`

const AlbumsPage = () => {
  const { loading, error, data } = useQuery(getAlbumsQuery)

  return (
    <Layout title="Albums">
      <h1>Albums</h1>
      {!loading && (
        <AlbumBoxes
          loading={loading}
          error={error}
          albums={data && data.myAlbums}
        />
      )}
    </Layout>
  )
}

export default AlbumsPage
