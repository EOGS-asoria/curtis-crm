export async function get_products_service(){
    const gid='1880039227'
    const res = await axios.get('/api/google-sheets/'+gid)
    return res.data
}

export async function get_asc_service(){
    const gid='725303120'
    const res = await axios.get('/api/google-sheets/'+gid)
    return res.data
}
