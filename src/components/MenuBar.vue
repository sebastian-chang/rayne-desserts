<template>
  <main class="default-layout-content">
    <div class="category-filter-bar">
      <div class="filters-bar-new__title">
        <div class="category__title">
          <h1 class="category__name">All desserts</h1>
        </div>
      </div>
      <div class="lv-filters-bar-new">
        <div class="filters-bar-new">
          <div></div>
          <div class="lv-filters-bar-new__primary">
            <span
              id="filters_label"
              class="lv-filters-bar-new__label list-label-l"
              >Filter by:</span
            >
            <ul
              aria-labelledby="filters_label"
              class="lv-list lv-filters-bar-new__triggers"
            >
              <li class="lv-filters-bar-new__buyonline-wrapper">
                <button
                  aria-pressed="false"
                  aria-label="Only display the items available for purchase online"
                  class="
                    lv-switch-button
                    list-label-l
                    -text-is-medium
                    lv-filters-bar-new__buyonline
                  "
                >
                  Available Online
                </button>
              </li>
              <!---->
              <li class="lv-filters-bar-new__filter-by">
                <button class="tabbar-button -hidden-on-large">
                  <svg focusable="false" aria-hidden="true" class="lv-icon">
                    <use
                      xlink:href="/_nuxt/icons.svg#sprite-controls-filter"
                    ></use>
                  </svg>
                  <span>Filter by</span>
                  <!---->
                </button>
              </li>
              <li>
                <button class="tabbar-button -shown-on-large">
                  <span class="-text-is-medium">categories</span>
                  <!---->
                </button>
              </li>
              <li>
                <button class="tabbar-button -shown-on-large">
                  <span class="-text-is-medium">materials</span>
                  <!---->
                </button>
              </li>
              <li>
                <button class="tabbar-button -shown-on-large">
                  <span class="-text-is-medium">colors</span>
                  <!---->
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.default-layout__content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
}
.filters-bar-new__title {
  flex: 1 1 auto;
  align-self: flex-start;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 4.5rem;
}
.category__name {
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 1.75rem;
  font-weight: 700;
  color: inherit;
}
.lv-filters-bar-new,
.lv-filters-bar-new__wrapper {
  position: relative;
}
[dir] .lv-filters-bar-new__wrapper > div {
  background-color: #fff;
  box-shadow: inset 0 -1px 0 #eae8e4;
}
.lv-filters-bar-new__primary {
    align-self: flex-end;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex: inherit;
}
.list-label-l {
    font-size: 1rem;
    letter-spacing: .025rem;
    line-height: 1.25rem;
    font-weight: 400;
}
.lv-filters-bar-new__triggers {
    display: flex;
    white-space: nowrap;
    height: 100%;
}
.lv-list {
    list-style: none;
}
[dir=ltr] .lv-filters-bar-new__buyonline-wrapper, [dir=ltr] .lv-filters-bar-new__try-on-wrapper {
    padding-right: 2.5rem;
}


[dir=ltr] .lv-switch-button {
    padding: .5rem 4rem .5rem 0;
}
[dir] button {
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    text-align: inherit;
}

[dir=ltr] .lv-switch-button:before {
    right: 0;
}
[dir] .lv-switch-button:before {
    margin-top: -.5rem;
    border-radius: .5rem;
    transition: background-color .3s cubic-bezier(.47,0,.745,.715);
    background: #e1dfd8;
}
.lv-switch-button:before {
    position: absolute;
    top: 50%;
    content: "";
    width: 2.5rem;
    height: 1rem;
}
</style>
