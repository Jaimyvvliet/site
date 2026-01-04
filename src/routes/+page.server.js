import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
	const query = gql`
  query aboutMe {
    aboutMes {
      thumbnail {
        url
        width
        size
        mimeType
        height
      }
      paragraph {
        mainTitle
        content
        additionalSections {
          contentOfSection
          sectionTitle
          id
        }
      }
      gallery {
        fileName
        height
        size
        url
        width
      }
    }
  }
	`;

	const data = await hygraph.request(query);

	return {
		about: data.aboutMes[0]
	};
};