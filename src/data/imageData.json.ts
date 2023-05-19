const imageData = async imageId =>
  await fetch(
    `http://drupal10.dev.ncei.noaa.mobomo.net/jsonapi/file/file/${imageId}`
  )
    .then(response => response.json())
    .then(data => {
      return {
        id: data?.data?.id,
        internalId: data?.data?.attributes?.drupal_internal__fid,
        name: data?.data?.attributes?.filename,
        url: data?.data?.attributes?.uri?.url,
      };
    })
    .catch(error => console.error(error));

export default imageData;
