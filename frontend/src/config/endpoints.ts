interface HeadersConfigProps {
    headers: {
      Authorization: string
    }
  }

  export const endpoints = (name:string):string => {
    const isLocal = window.location.origin.includes('localhost')
    const AUTH_SERVER = isLocal ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL
 
    const endpoints:any = {
        user_login: `${AUTH_SERVER}/api/v1/login/`,
        clients: `${AUTH_SERVER}/api/v1/clients/`,
    }
    return endpoints[name]
}

export const headers = (): HeadersConfigProps => {
    const token = JSON.parse(localStorage.getItem(`user${process.env.NEXT_PUBLIC_AUTH_BASE_PATH}`) ?? '').token
    return {
      headers: {
        Authorization: `JWT ${token}`
      }
    }
  }