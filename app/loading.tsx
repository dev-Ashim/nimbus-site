// Skeleton shown while a page is loading during in-app navigation.
export default function Loading() {
  return (
    <div className="page-skeleton" aria-busy="true" aria-label="Loading page">
      <div className="skeleton-hero">
        <div className="container">
          <span className="skeleton-line dark" style={{ width: 140 }} />
          <span className="skeleton-line dark tall" style={{ width: "min(520px, 80%)" }} />
          <span className="skeleton-line dark" style={{ width: "min(380px, 60%)" }} />
        </div>
      </div>
      <div className="container skeleton-body">
        <span className="skeleton-line" style={{ width: 120 }} />
        <span className="skeleton-line tall" style={{ width: "min(460px, 75%)" }} />
        <div className="skeleton-grid">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="skeleton-card">
              <span className="skeleton-block" />
              <span className="skeleton-line" style={{ width: "40%" }} />
              <span className="skeleton-line" style={{ width: "85%" }} />
              <span className="skeleton-line" style={{ width: "70%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
