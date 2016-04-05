const activitiesMapping = {
    activities: {
        url: `/activities/:id`
        , crud: true
        , transformer: transformers.array,
        options: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }
}

export default activitiesMapping