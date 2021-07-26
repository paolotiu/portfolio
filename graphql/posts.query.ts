import gql from 'graphql-tag';

export const postPreview = gql`
  query postPreview {
    user(username: "Tiu") {
      publication {
        posts {
          title
          brief
          _id
          dateAdded
          slug
        }
      }
    }
  }
`;
