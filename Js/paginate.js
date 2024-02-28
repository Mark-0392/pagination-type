const paginate = (followers) => {
  //   console.log(followers)
  const itemsperPage = 9
  const numberofPages = Math.ceil(followers.length / itemsperPage)
  const newFollowers = Array.from({ length: numberofPages }, (_, index) => {
    const start = index * itemsperPage
    return followers.slice(start, start + itemsperPage)
  })
  return newFollowers
}

export default paginate
