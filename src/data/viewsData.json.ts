const pageData = await fetch(
  `http://chris.dev.ncei.noaa.mobomo.net/jsonapi/views/products/page_1`
)
  .then(response => response.json())
  .then(data => {
    return {
      id: data?.data?.id,
      name: data?.data?.attributes?.name,
      body: data?.data?.attributes?.description?.processed,
    };
  })
  .catch(error => console.error(error));

export default pageData;
