const taxonomyData = await fetch(
  'http://drupal10.dev.ncei.noaa.mobomo.net/jsonapi/taxonomy_term/category_subcategory_'
  // 'http://chris.dev.ncei.noaa.mobomo.net/jsonapi/views/products/page_1'
)
  .then(response => response.json())
  .then(data => {
    const result = data?.data.map(item => ({
      id: item?.id,
      relationshipsId: item?.relationships?.vid?.data[0]?.id,
      parentId: item?.relationships?.parent?.data[0]?.id,
      internalId: item?.attributes.drupal_internal__revision_id,
      targetId:
        item?.relationships?.parent?.data[0]?.meta?.drupal_internal__target_id,
      name: item?.attributes.name,
      text: item?.attributes.description?.processed,
      path: item?.attributes.path?.alias,
    }));
    return result;
  })
  .catch(error => console.error(error));

export default taxonomyData;
