import * as React from "react"

function MenuIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
      <symbol id="prefix__menu" viewBox="0 -40 40 40">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFF"
          d="M38.95 0C39.65 0 40-.35 40-1.05V-39c0-.667-.35-1-1.05-1H1c-.667 0-1 .333-1 1v37.95C0-.35.333 0 1 0h37.95z"
        />
        <path class="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#626262"
          d="M11.05-14.85V-11H29v-3.85zM11.05-18.1H29v-3.85H11.05zM29-25.15V-29H11.05v3.85z"
        />
      </symbol>
      <use
        xlinkHref="#prefix__menu"
        width={40}
        height={40}
        y={-40}
        transform="scale(1 -1)"
        overflow="visible"
      />
    </svg>
  )
}

export default MenuIcon
