/**
 * 
 * @param {object|string} jsonData 
 */
function json2nbt(jsonData) {
  if(typeof jsonData === 'string') jsonData = JSON.parse(jsonData)
  
}

export default json2nbt