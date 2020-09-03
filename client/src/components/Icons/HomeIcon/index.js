import * as React from "react"

function HomeIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
      <symbol id="prefix__home" viewBox="0 -40 40 40">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFF"
          d="M40-1.05V-39c0-.667-.35-1-1.05-1H1c-.667 0-1 .333-1 1v37.95C0-.35.333 0 1 0h37.95C39.65 0 40-.35 40-1.05z"
        />
        <path class="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#626262"
          d="M29.15-19c.133-.133.233-.3.3-.5a1.01 1.01 0 00-.05-.55.802.802 0 00-.35-.45.863.863 0 00-.55-.2h-1.35v-7.75c0-.133-.067-.267-.2-.4a.54.54 0 00-.4-.15H21.9a.48.48 0 00-.35.15c-.133.133-.2.267-.2.4v4.7h-2.7v-4.7c0-.133-.067-.267-.2-.4a.48.48 0 00-.35-.15h-4.65a.54.54 0 00-.4.15.665.665 0 00-.15.4v7.75h-1.4c-.2 0-.383.067-.55.2-.133.1-.25.25-.35.45a.787.787 0 000 .55.9.9 0 00.25.5l8.5 7.75c.2.167.417.25.65.25.233 0 .45-.083.65-.25l8.5-7.75zM27-12.1c.133 0 .267-.05.4-.15.1-.133.15-.267.15-.4V-16l-4.3 3.9H27z"
        />
      </symbol>
      <use
        xlinkHref="#prefix__home"
        width={40}
        height={40}
        y={-40}
        transform="matrix(1 0 0 -1 .35 0)"
        overflow="visible"
      />
    </svg>
  )
}

export default HomeIcon
