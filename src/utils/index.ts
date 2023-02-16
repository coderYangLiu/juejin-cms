export function removeAtTime(obj) {
  const { createdAt, updatedAt, publishedAt, ...params } = obj || {};

  for (const key in params) {
    let data = params[key]
    if (Array.isArray(data)) {
      params[key] = data.map((item) => removeAtTime(item));
    }
    else if (data && typeof data === "object") {
      params[key] = removeAtTime(data)
    }
  }

  return params;
}

