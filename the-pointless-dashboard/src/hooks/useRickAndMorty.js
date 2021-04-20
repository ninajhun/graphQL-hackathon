// export default async function useRickAndMorty() {
//   const data = await fetch("https://rickandmortyapi.com/graphql", {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({
//       query: `
//         query getCharacters {
//           characters {
//             results {
//               name
//             }
//           }
//         }
//       `,
//     }),
//   }).then((res) => res.json());
//   // .then((data) => data);

//   return data;
// }

// // export default async function useRickandMorty() {
// //   const data = await (fetchRickAndMorty());
// //   return data;
// // }
