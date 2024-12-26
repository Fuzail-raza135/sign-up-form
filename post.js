function addPost() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  if (!title || !description) {
      alert('Please fill out both fields.');
      return;
  }

  const postContainer = document.createElement('div');
  postContainer.className = 'post';

  const postTitle = document.createElement('h4');
  postTitle.textContent = title;

  const postDescription = document.createElement('p');
  postDescription.textContent = description;

  const postTime = document.createElement('p');
  postTime.style.fontSize = '12px';
  postTime.style.color = 'gray';
  postTime.textContent = new Date().toLocaleString();

  const actions = document.createElement('div');
  actions.className = 'post-actions';

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';

  const shareButton = document.createElement('button');
  shareButton.textContent = 'Share';

  actions.appendChild(likeButton);
  actions.appendChild(commentButton);
  actions.appendChild(shareButton);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postTime);
  postContainer.appendChild(postDescription);
  postContainer.appendChild(actions);

  document.getElementById('posts').prepend(postContainer);

  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
}
