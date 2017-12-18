<template>
  <div class="product-list u__lmt" v-editable="blok">
    <h3 class="u__center product-list__header">{{ blok.headline }}</h3>

    <div class="uk-grid">
      <div class="uk-width-1-2@s uk-width-1-3@m">
        <figure>
          <a href="/products/strawberry" class="u__ratio">
            <img src="//img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg" data-sizes="auto" data-src="//img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg" data-srcset="//img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg 300w, //img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg 600w" class="product-list__img lazyautosizes lazyloaded" alt="" sizes="367px" srcset="//img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg 300w, //img.storyblok.com/te56khLbGP-9fzSTHCkgzknoqrM=/300x300/f/40810/800x800/436b93624a/11.jpg 600w">
          </a>
        </figure>
        <div class="product-list__details">
          <div class="uk-grid product-list-priceline">
            <div class="uk-width-1-1 uk-width-1-2">
              Strawberry
            </div>
            <div class="product-list__price uk-width-1-1 uk-width-1-2">
              $ 9.90
            </div>
          </div>
          <div class="product-list__muted-text">
            Red
            Strawberry
          </div>
          <a class="product-list__link link" href="/products/strawberry">Detail</a>
        </div>
      </div>

      <div class="uk-width-1-2@s uk-width-1-3@m">
        <figure>
          <a href="/products/bomb" class="u__ratio">
            <img src="//img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg" data-sizes="auto" data-src="//img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg" data-srcset="//img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg 300w, //img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg 600w" class="product-list__img lazyautosizes lazyloaded" alt="" sizes="367px" srcset="//img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg 300w, //img.storyblok.com/mMfzofB8MdXgEfkh0gXd54CcLvU=/300x300/f/40810/800x800/d8092f1835/9.jpg 600w">
          </a>
        </figure>
        <div class="product-list__details">
          <div class="uk-grid product-list-priceline">
            <div class="uk-width-1-1 uk-width-1-2">
              Bomb
            </div>
            <div class="product-list__price uk-width-1-1 uk-width-1-2">
              $ 9.90
            </div>
          </div>
          <div class="product-list__muted-text">
            Black
            Bomb
          </div>
          <a class="product-list__link link" href="/products/bomb">Detail</a>
        </div>
      </div>

      <div class="uk-width-1-2@s uk-width-1-3@m">
        <figure>
          <a href="/products/pineapple" class="u__ratio">
            <img src="//img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg" data-sizes="auto" data-src="//img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg" data-srcset="//img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg 300w, //img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg 600w" class="product-list__img lazyautosizes lazyloaded" alt="" sizes="367px" srcset="//img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg 300w, //img.storyblok.com/hIke-EcKsRs70UQi1TgG3ZzJv1g=/300x300/f/40810/800x800/eb85c88962/8.jpg 600w">
          </a>
        </figure>
        <div class="product-list__details">
          <div class="uk-grid product-list-priceline">
            <div class="uk-width-1-1 uk-width-1-2">
              Pineapple
            </div>
            <div class="product-list__price uk-width-1-1 uk-width-1-2">
              $ 9.90
            </div>
          </div>
          <div class="product-list__muted-text">
            Yellow
            Pineapple
          </div>
          <a class="product-list__link link" href="/products/pineapple">Detail</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
