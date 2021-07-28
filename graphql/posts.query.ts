import gql from 'graphql-tag';

export const postPreviews = gql`
  query postPreviews {
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
