/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      owner
      photos {
        items {
          id
          bucket
          userName
          labels
        }
        nextToken
      }
      members
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        photos {
          nextToken
        }
        members
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      album {
        id
        name
        owner
        photos {
          nextToken
        }
        members
      }
      bucket
      fullsize {
        key
        width
        height
        userName
      }
      thumbnail {
        key
        width
        height
        userName
      }
      userName
      labels
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        album {
          id
          name
          owner
          members
        }
        bucket
        fullsize {
          key
          width
          height
          userName
        }
        thumbnail {
          key
          width
          height
          userName
        }
        userName
        labels
      }
      nextToken
    }
  }
`;
export const searchPhotos = /* GraphQL */ `
  query SearchPhotos(
    $filter: SearchablePhotoFilterInput
    $sort: SearchablePhotoSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPhotos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        album {
          id
          name
          owner
          members
        }
        bucket
        fullsize {
          key
          width
          height
          userName
        }
        thumbnail {
          key
          width
          height
          userName
        }
        userName
        labels
      }
      nextToken
      total
    }
  }
`;
