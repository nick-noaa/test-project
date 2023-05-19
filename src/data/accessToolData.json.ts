const accessToolData = await fetch(
  'http://drupal10.dev.ncei.noaa.mobomo.net/jsonapi/node/acccess_tool'
  // `http://chris.dev.ncei.noaa.mobomo.net/jsonapi/node/acccess_tool`
)
  .then(response => response.json())
  .then(data => {
    const result = data?.data.map(data => ({
      id: data?.id,
      internalNid: data?.attributes?.drupal_internal__nid,
      title: data?.attributes?.title,
      body: data?.attributes?.field_short_description,
      link: data?.attributes?.field_link_to_access_tool?.uri,
      text: data?.attributes?.field_link_to_access_tool?.title,
    }));
    return result;
  })
  .catch(error => console.error(error));

export default accessToolData;
