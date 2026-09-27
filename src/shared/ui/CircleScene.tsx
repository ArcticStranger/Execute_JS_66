export const CircleScene = () => {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-background__ring hero-background__ring--outer" />
      <div className="hero-background__ring hero-background__ring--middle" />
      <div className="hero-background__ring hero-background__ring--inner" />
      <span className="hero-background__badge hero-background__badge--js">JS</span>
      <span className="hero-background__badge hero-background__badge--ts">TS</span>
    </div>
  )
}
