interface HeadersConfigProps {
    headers: {
      Authorization: string
    }
  }

  export const endpoints = (name:string):string => {
    const isLocal = window.location.origin.includes('localhost')
    const SERVER = isLocal ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL
 
    const endpoints:any = {
        user_login: `${SERVER}/api/v1/login/`,
        clients: `${SERVER}/api/v1/clients/`,
        inbound_case: `${SERVER}/api/v1/inbound-case/`,
    }
    return endpoints[name]
}

export const headers = (): HeadersConfigProps => {
    const token = JSON.parse(localStorage.getItem(`user`) ?? '').token
    return {
      headers: {
        Authorization: `JWT ${token}`
      }
    }
  }