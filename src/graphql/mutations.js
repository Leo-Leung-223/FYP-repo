/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUsernameToAlbum = /* GraphQL */ `
  mutation AddUsernameToAlbum($username: String!, $albumId: String!) {
    addUsernameToAlbum(username: $username, albumId: $albumId) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
