<template>
  <div class="wrapperArticleDetail">
    <h2>ARTICLE DETAIL</h2>
    <div>
      <label for="title">Title</label>
      <p>{{article.title}}</p>
    </div>
    <div>
      <label for="content">Content</label>
      <p>{{article.content}}Content</p>
    </div>
    <div>
      <label for="author">Author</label>
      <p>{{article.author}}</p>
    </div>
    <div>
      <label for="email">Email</label>
      <p>{{article.email}}</p>
    </div>
    <div>
      <label for="count">View count</label>
      <p>{{article.count}}</p>
    </div>
    <div>
      <label for="updatedDate">Updated date</label>
      <p>{{article.updatedDate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
};
</script>

<style scoped>
.wrapperArticleDetail {
  width: 800px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.wrapperArticleDetail h2 {
  margin-top: 0;
  text-align: center;
  color: #42b983;
}

/**FORM***/
.wrapperArticleDetail div {
  margin-bottom: 15px;
  overflow: hidden;
}
label {
  float: left;
  font-size: 15px;
  font-weight: bold;
  margin: 0px 20px 0 0;
}
p {
  float: left;
  margin: 0;
}
</style>
