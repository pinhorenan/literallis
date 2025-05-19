const STORAGE_KEY_LIKES    = 'literalis_post_likes';
const STORAGE_KEY_COMMENTS = 'literalis_post_comments';

const likes    = JSON.parse(localStorage.getItem(STORAGE_KEY_LIKES)    || '{}');
const comments = JSON.parse(localStorage.getItem(STORAGE_KEY_COMMENTS) || '{}');

function persist(btn, map, key){
  const id = btn.closest('.post').dataset.postId;
  const active = btn.classList.toggle('active');
  map[id] = active;
  localStorage.setItem(key, JSON.stringify(map));
}

document.querySelectorAll('.like-btn').forEach(b => {
  if(likes[b.closest('.post').dataset.postId]) b.classList.add('active');
  b.addEventListener('click', () => persist(b, likes, STORAGE_KEY_LIKES));
});
document.querySelectorAll('.comment-btn').forEach(b => {
  if(comments[b.closest('.post').dataset.postId]) b.classList.add('active');
  b.addEventListener('click', () => persist(b, comments, STORAGE_KEY_COMMENTS));
});
