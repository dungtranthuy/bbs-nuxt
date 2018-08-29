<template>
  <article-detail :article="article"/>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import ArticleDetail from '../../components/ArticleDetail';

export default {
  async fetch({store, params}) {
    await store.dispatch('detailArticle', params.id);
  },
  components: {
    ArticleDetail,
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions({
      detailArticle: 'detailArticle',
      updateArticle: 'updateArticle',
    }),
    ...mapMutations(['getDetailArticle']),
  },
};
</script>
