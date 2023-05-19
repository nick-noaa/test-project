const cardData = [
  {
    date: `october 2019`,
    heading: `nes quas odio`,
    body: `orem officia maiores repellat tenetur
          praesentium omnis est ex tempora a necessitatibus reiciendis at et
          dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
          laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
          iusto error molestias dolorum, necessitatibus labore?`,
    url: '/about',
    image: {
      src: `https://picsum.photos/600/300?random=${
        Math.floor(Math.random() * 701) + 100
      }`,
      alt: 'just a sample image',
    },
  },
  {
    date: `January 2019`,
    heading: `sunt aut facere `,
    body: `necessitatibus reiciendis at et
          dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
          laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
          iusto error molestias dolorum, necessitatibus labore?`,
    url: '/about',
    image: {
      src: `https://picsum.photos/600/300?random=${
        Math.floor(Math.random() * 301) + 100
      }`,
      alt: 'just a sample image',
    },
  },
  {
    date: `November 2009`,
    heading: `qui est esse`,
    body: `voluptatum assumenda aspernatur libero
          iusto error molestias dolorum, necessitatibus labore?`,
    url: '/about',
    image: {
      src: `https://picsum.photos/600/300?random=${
        Math.floor(Math.random() * 501) + 100
      }`,
      alt: 'just a sample image',
    },
  },
];

export default cardData;
