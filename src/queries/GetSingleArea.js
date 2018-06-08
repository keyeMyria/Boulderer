import gql from 'graphql-tag'

export default gql`
  query getSingleArea( $areaId: ID! ){
    area( id:$areaId ){
      description
      latitude
      longitude
      nombre
      photos
      comments
      problems{
        nombre
        photos
        likes
        description
        latitude
        longitude
        id
      }
      user{
        nombre
      }
    }

  }
`;