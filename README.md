# Embed Web Marketplace

This is a proof of concept to start testing embedding Web Marketplace into Goodnotes website. The idea is to include an `iframe` that points to the needed Item Carousel and displays it like a component on the page with just the following.

```html
<iframe
  src="https://marketplace.goodnotesbeta.com/en/embed/ic/65eb069b9413198024bed3ed?theme=light&padding-inline=max(24px, 50%25 - 580px)"
/>
```

Custom parameters can be passed as query string parameters into the URL to customize the embedded Web Marketplace "component". For example, the following parameters exist already:

1. `theme` - override the theme to `light` or `dark`;
2. `padding-inline` - The `padding-inline` CSS property to customize the left/right padding for carousel scrolling;

## How to run

```shell
bun run dev
```

![Kapture 2025-07-22 at 09 48 10](https://github.com/user-attachments/assets/bd360282-a063-4d7a-b3e4-07aef4541669)
