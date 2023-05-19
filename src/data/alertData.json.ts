const alertData = await fetch('https://www.ncei.noaa.gov/alerts/api')
  .then(response => response.json())
  .then(data => {
    const result = data?.map(alert => ({
      body: alert?.body[0]?.processed,
      created: alert?.created[0]?.value,
      updated: alert?.changed[0]?.value,
      ended: alert?.field_end_date[0]?.value,
      alertType: alert?.field_alert_type[0]?.value,
      path: alert?.field_node_reference[0]?.url,
    }));
    return result;
  })
  .catch(error => console.error(error));

export default alertData;
