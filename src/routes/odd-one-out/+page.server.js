import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export const load = async () => {
	const query = gql`
		query linkTree {
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
		linkList: data.linkTrees[0]?.linkTree ?? []
	};
};
