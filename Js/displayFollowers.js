const container = document.querySelector('.container')
const display = (followers) => {
  // console.log(followers)
  const newFollowers = followers
    .map((profile) => {
      //   console.log(profile)
      const { avatar_url: img, login: name, html_url: profileAddress } = profile
      return `<article class="card">
        <img src="${img}" alt="${name}" />
        <h4>${name}</h4>
        <a href="${profileAddress}" class="btn">
          View Profile
        </a>
      </article>`
    })
    .join('')
  container.innerHTML = newFollowers
}

export default display
