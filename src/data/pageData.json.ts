const pageData = async (type, bundle, uuid) =>
  await fetch(
    `http://drupal10.dev.ncei.noaa.mobomo.net/jsonapi/${type}/${bundle}/${uuid}`
  )
    .then(response => response.json())
    .then(data => {
      return {
        id: data?.data?.id,
        internalNid: data?.data?.attributes?.drupal_internal__nid,
        title: data?.data?.attributes?.title,
        body: data?.data?.attributes?.body?.processed,
        tabs: data?.data?.relationships?.field_tabs_section?.data?.map(tab => ({
          id: tab.id,
          targetId: tab.meta?.drupal_internal__target_id,
        })),
      };
    })
    .catch(error => console.error(error));

export default pageData;
