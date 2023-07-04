type props={
    url:string,
    path:string,
    options?:any
}

export const api = async({url, path, options}:props) => {
    const respose=await fetch(`${url}/${path}`, options)
    const data=await respose.json()
    return data
}