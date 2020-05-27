const bookIconUnits = {
  width: 24,
  height: 24,
  description: (primaryClass, secondaryClass) => (
    <>
      <path
        className={`${secondaryClass} fill-current`}
        d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
      />
      <path
        className={`${primaryClass} fill-current`}
        d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
      />
    </>
  ),
}

const brickIconUnits = {
  width: 24,
  height: 24,
  description: (primaryClass, secondaryClass) => (
    <>
      <path
        className={`${secondaryClass} fill-current"`}
        d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"
      />
      <polygon
        className={`${primaryClass} fill-current`}
        points="21 6 12 10 12 22 21 18"
      />
    </>
  ),
}

const chatgroupIconUnits = {
  width: 24,
  height: 24,
  description: (primaryClass, secondaryClass) => (
    <>
      <path
        className={`${secondaryClass} fill-current`}
        d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
      <path
        className={`${primaryClass} fill-current`}
        d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z"
      />
    </>
  ),
}

const filmIconUnits = {
  width: 24,
  height: 24,
  description: (primaryClass, secondaryClass) => (
    <>
      <path
        className={`${secondaryClass} fill-current`}
        d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"
      />
      <path
        className={`${primaryClass} fill-current`}
        d="M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
      />
    </>
  ),
}

const swatchIconUnits = {
  width: 24,
  height: 24,
  description: (primaryClass, secondaryClass) => (
    <>
      <path
        className={`${secondaryClass} fill-current`}
        d="M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
      <path
        className={`${primaryClass} fill-current`}
        d="M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z"
      />
    </>
  ),
}

export default {
  book: bookIconUnits,
  brick: brickIconUnits,
  chatgroup: chatgroupIconUnits,
  film: filmIconUnits,
  swatch: swatchIconUnits,
}
