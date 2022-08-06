const writeScreen = (data = []) => { 

    const postContainer = document.querySelector('.photos');
  
    let elements = '';
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      const postTitleElement = document.createElement('h3');
      postTitleElement.classList.add('posth3');
      const postBodyElement = document.createElement('img');
      postBodyElement.classList.add('postimg');
      postTitleElement.innerText = post.title;
      postBodyElement.src = post.url;
      postElement.appendChild(postTitleElement);
      postElement.appendChild(postBodyElement);
      postContainer.appendChild(postElement);
    });
    
  };

 
  const getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
      console.log(res);
      if (res.status === 200) {
        writeScreen(res.data);
      }
      // writeToScreen();
    } catch (error) {
      console.log(error);
    }
  };
  
  
  getPosts();

 