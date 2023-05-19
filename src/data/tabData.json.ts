const tabData = async tabId => {
  const response = await fetch(
    `http://drupal10.dev.ncei.noaa.mobomo.net/jsonapi/paragraph/product_tabbed_section/${tabId}`
  );
  const data = await response.json();
  return {
    id: data?.data.id,
    internalId: data?.data.attributes?.drupal_internal__id,
    parentId: data?.data.attributes?.parent_id,
    title: data?.data.attributes?.field_product_dataset_title,
    body: data?.data.attributes?.field_product_dataset_body?.processed,
    fields:
      data?.data.relationships?.field_product_dataset_paragraph?.data?.map(
        field => ({
          id: field.id,
          targetId: field.meta?.drupal_internal__target_id,
          type: field.type,
        })
      ),
    accordionTitle: data?.data.attributes?.field_accordion_header,
    accordionBody: data?.data.attributes?.field_accordion_body?.processed,

    paragraphBody: data?.data.attributes?.field_text_paragraph_body?.processed,

    acknowledgementTitle: data?.data.attributes?.field_acknowledgement_title,
    acknowledgementBody:
      data?.data.attributes?.field_acknowledgement_body?.processed,

    acknowledgementImages:
      data?.data.relationships?.field_acknowledgements_image?.data?.map(
        image => ({
          id: image.id,
          type: image.type,
          targetId: image.meta?.drupal_internal__target_id,
          alt: image.meta?.alt,
          width: image?.meta?.width,
          height: image?.meta?.height,
        })
      ),
  };
};

export default tabData;
