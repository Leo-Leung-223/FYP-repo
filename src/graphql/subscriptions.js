/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
