function checkResponse(res) {
  if (res.ok) {
    return res;
  } else {
    throw new Error(`Ошибка: ${res.statusText}`)
  }
}

export default checkResponse;