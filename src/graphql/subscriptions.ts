/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      birthdate
      phoneNumber
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      birthdate
      phoneNumber
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      birthdate
      phoneNumber
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          user {
            id
            name
            email
            birthdate
            phoneNumber
            imageUri
            status
            createdAt
            updatedAt
          }
          chatRoom {
            id
            createdAt
            updatedAt
          }
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        name
        email
        birthdate
        phoneNumber
        imageUri
        status
        chatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
