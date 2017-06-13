




export const fetchNoteList = () =>{
    return fetch('./api/getNotes'
      ,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
      }
    )  
    .then(
      (response) => {  
          console.log(response)
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
       
 
      return response.json()
    } ,
      error => ({error: error.message || 'Something bad happened'})
    )
}