

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="skeleton-card">
            <div className="skeleton skeleton-image" />
            <div className="skeleton-content">
              <div className="skeleton skeleton-category" />
              <div className="skeleton skeleton-title" />
              <div className="skeleton skeleton-title short" />
              <div className="skeleton skeleton-rating" />
              <div className="skeleton skeleton-price" />
              <div className="skeleton skeleton-button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};