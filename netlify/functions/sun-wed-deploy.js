import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/65e3b47359ab2815e1be6295'

const handler = schedule('0 9 * * 0,3', async () => {
    await fetch (BUILD_HOOK, {
      method: 'POST'
    }).then(response => {
      console.log('Build hook response:', response)
    })
  
    return {
      statusCode: 200
    }
  })
  
  export { handler }