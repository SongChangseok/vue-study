<template>
  <header>
    <slot name="header" message="안녕"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer" message="바닥"></slot>
  </footer>
</template>
