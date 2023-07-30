export const getJson = async (url: String) => {
    return await fetch(url)
        .then(response => { return response.json() })
        .catch(error => {console.log("Error appeared during call to "+ url + ". Message: " + error)})
}

export const postJson = async (url: String, body: String) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => { return response.ok })
        .catch(() => {return false})
}

export const putJson = async (url: String, body: String) => {
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => { return response.ok })
        .catch(() => {return false})
}