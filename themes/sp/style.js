/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      .dark body {
        background-color: black;
      }
      .light body {
        background-color: transparent;
      }
      .light {
        background-image: linear-gradient(
            to right,
            rgb(239 239 239) 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, rgb(239 239 239) 1px, transparent 1px);
        background-size: 20px 20px;
        // background-position: center center;
      }
    `}</style>
  )
}

export { Style }
