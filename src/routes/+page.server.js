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
				newParagraph {
					mainTitle
					sections {
						contentOfSection {
							markdown
						}
						sectionTitle
					}
					content {
						markdown
					}
				}
			}
			linkTrees {
				linkTree {
					hyperlink
					titleOfHyperlink
				}
			}
		}
	`;

	const data = await hygraph.request(query);

	return {
		about: data.aboutMes[0],
		linkList: data.linkTrees[0]?.linkTree ?? []
	};
};
