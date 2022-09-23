function checkResponse(res) {
  if (res.ok) {
    // console.log('res from checkresponse', res);
    // console.log('res json', res.json( ));
    return res;
  } else {
    throw new Error(`Ошибка: ${res.statusText}`)
  }
}

export default checkResponse;